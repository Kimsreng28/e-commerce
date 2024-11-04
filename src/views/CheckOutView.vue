<template>
  <div class="container">
    <LandingBar :profileImageUrl="profileImageUrl" />
    <div class="checkout-container">
      <div class="cart-items">
        <div class="back">
          <span class="material-icons" style="color: white; cursor: pointer">
            arrow_back_ios_new
          </span>
          <button
            style="cursor: pointer; font-family: Quicksand, sans-serif"
            @click="goBack"
          >
            Continue Shopping
          </button>
        </div>
        <h2
          style="
            font-size: 30px;
            font-weight: bold;
            margin-top: 5%;
            color: white;
            font-family: Quicksand, sans-serif;
          "
        >
          Shopping Cart
        </h2>
        <p
          style="
            font-size: 18px;
            font-weight: bold;
            color: white;
            font-family: Quicksand, sans-serif;
            margin-top: 3%;
          "
        >
          You have {{ cart.length }} items in your cart
        </p>
        <div v-for="(item, index) in cart" class="cart-item">
          <img :src="item.image" alt="" class="item-image" />
          <div class="item-details">
            <h3
              style="
                font-family: Quicksand, sans-serif;
                font-weight: bold;
                font-size: 24px;
              "
            >
              {{ item.title }}
            </h3>
            <div class="quantity">
              <button @click="decrementQuantity(index)">-</button>
              <p
                style="
                  font-weight: bold;
                  font-size: 24px;
                  font-family: Quicksand, sans-serif;
                "
              >
                {{ item.quantity }}
              </p>
              <button @click="incrementQuantity(index)">+</button>
            </div>
            <p
              class="item-price"
              style="
                font-weight: bold;
                font-size: 24px;
                font-family: Quicksand, sans-serif;
                margin-top: 10%;
              "
            >
              {{ (item.price * item.quantity).toFixed(2) }}$
            </p>
          </div>
          <button
            @click="removeItem(index)"
            class="remove-button"
            style="
              border: none;
              background-color: transparent;
              cursor: pointer;
              margin-top: 25%;
              margin-right: 5%;
            "
          >
            <span class="material-icons" style="color: crimson"> delete </span>
          </button>
        </div>
      </div>

      <div class="payment-section">
        <div class="cardBar">
          <h2
            style="
              font-size: 30px;
              font-weight: bold;
              margin-top: 5%;
              color: black;
              font-family: Quicksand, sans-serif;
              margin-left: 5%;
            "
          >
            Card Details
          </h2>
          <img
            :src="profileImageUrl"
            alt=""
            style="width: 60px; height: 60px; margin-right: 5%; margin-top: 3%"
          />
        </div>

        <div class="payment-methods">
          <img
            :class="{ selected: selectedPaymentMethod === 'visa' }"
            src="../assets/images/visa.png"
            alt="Visa"
            @click="selectPaymentMethod('visa')"
          />
          <img
            :class="{ selected: selectedPaymentMethod === 'shopping' }"
            src="../assets/images/shopping.png"
            alt="Shopping"
            @click="selectPaymentMethod('shopping')"
          />
          <img
            :class="{ selected: selectedPaymentMethod === 'paypal' }"
            src="../assets/images/paypal.png"
            alt="PayPal"
            @click="selectPaymentMethod('paypal')"
          />
          <img
            :class="{ selected: selectedPaymentMethod === 'google-pay' }"
            src="../assets/images/google-pay.png"
            alt="Google Pay"
            @click="selectPaymentMethod('google-pay')"
          />
        </div>

        <form class="payment-form" @submit.prevent="submitPayment">
          <div class="nameCard">
            <p
              style="
                font-weight: bold;
                font-size: 16px;
                font-family: Quicksand, sans-serif;
                margin-top: 5%;
              "
            >
              Name on Card
            </p>
            <input
              type="text"
              placeholder="Name on Card"
              v-model="cardName"
              required
            />
          </div>
          <div class="numberCard">
            <p
              style="
                font-weight: bold;
                font-size: 16px;
                font-family: Quicksand, sans-serif;
                margin-top: 5%;
              "
            >
              Card Number
            </p>
            <input
              type="text"
              placeholder="Card Number"
              v-model="cardNumber"
              required
            />
          </div>
          <div class="card-info">
            <div
              class="expireDate"
              style="display: flex; flex-direction: column"
            >
              <p
                style="
                  font-weight: bold;
                  font-size: 16px;
                  font-family: Quicksand, sans-serif;
                  margin-top: 5%;
                "
              >
                Expiration Date
              </p>
              <input
                type="text"
                placeholder="Expiration Date"
                v-model="expirationDate"
                required
              />
            </div>
            <div class="cvv" style="display: flex; flex-direction: column">
              <p
                style="
                  font-weight: bold;
                  font-size: 16px;
                  font-family: Quicksand, sans-serif;
                  margin-top: 5%;
                "
              >
                CVV
              </p>
              <input type="text" placeholder="CVV" v-model="cvv" required />
            </div>
          </div>

          <hr style="width: 99%; color: black; height: 2px; margin-top: 5%" />

          <div class="summary">
            <div class="subtotal">
              <p style="font-weight: bold">Subtotal:</p>
              <span style="font-weight: 700"
                >{{ totalAmount.toFixed(2) }}$</span
              >
            </div>
            <div class="shipping">
              <p style="font-weight: bold">Shipping:</p>
              <span style="font-weight: 700">{{ shipping }}$</span>
            </div>
            <div class="total">
              <p style="font-weight: bold">Total (tax incl.):</p>
              <span style="font-weight: 700"
                >{{ (totalAmount + shipping).toFixed(2) }}$</span
              >
            </div>
          </div>
          <div class="submitted">
            <button type="submit" class="pay-now">Pay Now</button>
          </div>
        </form>

        <div class="print">
          <button
            class="print-button"
            style="cursor: pointer; font-family: Quicksand, sans-serif"
            @click="goToPrintReceipt"
          >
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { usePaymentStore } from "@/stores/usePaymentStore";
import LandingBar from "./LandingBar.vue";
export default {
  name: "Checkout",
  components: {
    LandingBar,
  },
  props: {
    profileImageUrl: String,
  },
  setup() {
    const paymentStore = usePaymentStore();
    return { paymentStore };
  },
  data() {
    return {
      cardName: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      shipping: 5,
      successMessage: "",
      selectedPaymentMethod: "visa",
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  computed: {
    totalAmount() {
      return this.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    profileImageUrl() {
      return (
        localStorage.getItem("userProfileImage") ||
        require("../assets/images/programmer.png")
      );
    },
  },
  methods: {
    goBack() {
      this.$router.push({ path: "/home" });
    },
    incrementQuantity(index) {
      this.cart[index].quantity++;
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    decrementQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
    removeItem(index) {
      this.cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    selectPaymentMethod(method) {
      this.selectedPaymentMethod = method;
    },
    submitPayment() {
      // Validate card details
      if (
        !this.cardName ||
        !this.cardNumber ||
        !this.expirationDate ||
        !this.cvv
      ) {
        alert("Please fill in all payment details.");
        return;
      }

      alert("Payment submitted successfully!");

      const finalAmount = (this.totalAmount + this.shipping).toFixed(2);
      this.paymentStore.setTotalAmount(finalAmount);

      localStorage.removeItem("cart");
      this.cart = [];
      this.$router.push("/home");
    },
    goToPrintReceipt() {
      this.$router.push({
        path: "/printReceipts",
        query: {
          cart: JSON.stringify(this.cart),
          totalAmount: this.totalAmount,
          shipping: this.shipping,
        },
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1500px;
  height: auto;
  display: flex;
  margin-left: -8.5%;
  margin-top: 1%;
  align-items: center;
  flex-direction: column;
}
.checkout-container {
  width: 1460px;
  height: 1943px;
  background-color: #716868;
  border-radius: 10px;
  margin: 2%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
}
.cart-items {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: 2%;
  margin-left: 2%;
}
.cart-item {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 2%;
  width: 90%;
  height: 230px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
}

.cart-item img {
  width: 170px;
  height: 180px;
  margin-left: 5%;
}

.back {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.back button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #716868;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 30px;
}
.back button:hover {
  transform: scale(1.02);
}

.item-details {
  width: 441px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.quantity {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  margin-top: 5%;
  gap: 20%;
}
.quantity button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 51px;
  height: 30px;
  background-color: #cbbfbf;
  color: #464646;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 30px;
}
.quantity button:hover {
  background-color: #a9a9a9;
}
.payment-section {
  width: 50%;
  height: 1150px;
  background-color: #bbadad;
  border-radius: 10px;
  margin: 2%;
}

.cardBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.payment-methods {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 150px;
  height: 100px;
  margin-left: 5%;
  margin-top: 5%;
  gap: 70%;
}
.payment-methods img {
  width: 70px;
  height: 70px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
  object-fit: cover;
}
.payment-methods img.selected {
  opacity: 1;
  border-radius: 5px;
}

.payment-methods img:hover {
  transition: opacity 0.3s, transform 0.3s;
  opacity: 1;
  transform: scale(1.05);
}

.payment-form {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 90%;
  margin-top: 5%;
  margin-left: 5%;
}

.card-info {
  margin-top: 2%;
  width: 99%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.nameCard,
.numberCard {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.nameCard input {
  margin-top: 3%;
  height: 70px;
  border-radius: 10px;
  border: none;
  padding: 5%;
  outline: none;
  font-family: Quicksand, sans-serif;
}
.numberCard input {
  margin-top: 3%;
  height: 70px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 5%;
  font-family: Quicksand, sans-serif;
}
.expireDate,
.cvv {
  display: flex;
  flex-direction: row;
  width: 45%;
}
.expireDate input {
  margin-top: 3%;
  height: 70px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 10%;
  font-family: Quicksand, sans-serif;
}
.cvv input {
  margin-top: 3%;
  height: 70px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 10%;
  font-family: Quicksand, sans-serif;
}
.summary {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 99%;
  margin-top: 5%;
  font-family: Quicksand, sans-serif;
  font-size: 20px;
}
.subtotal,
.shipping,
.total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 99%;
  margin-top: 5%;
}
.submitted {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 99%;
  margin-top: 15%;
}

.submitted button {
  width: 100%;
  height: 70px;
  border-radius: 10px;
  border: none;
  background-color: #47e075;
  color: #ffffff;
  font-size: 20px;
  font-family: Quicksand, sans-serif;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.3s, ease-out 0.4s;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  box-shadow: inset 0 0 0 0 #07c5eb;
}

.submitted button:hover {
  box-shadow: inset 0 100px 0 0 #07c5eb;
}

.print {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin-top: 10%;
  margin-right: 5%;
}
.print-button {
  width: 100%;
  height: 70px;
  border-radius: 10px;
  border: none;
  background-color: #969896;
  color: #ffffff;
  font-size: 20px;
  font-family: Quicksand, sans-serif;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.3s, ease-out 0.4s;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  box-shadow: inset 0 0 0 0 #07c5eb;
}

.print-button:hover {
  box-shadow: inset 400px 0px 0 0 #07c5eb;
}
</style>
