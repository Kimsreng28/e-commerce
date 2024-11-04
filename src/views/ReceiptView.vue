<template>
  <div class="receipt">
    <div class="container">
      <h2
        style="
          font-size: 26px;
          margin-top: 5%;
          font-family: Quicksand, sans-serif;
          font-weight: bold;
        "
      >
        Receipt
      </h2>
      <table
        style="
          width: 80%;
          border-collapse: collapse;
          margin-top: 5%;
          font-size: 18px;
          font-family: Quicksand, sans-serif;
        "
      >
        <thead>
          <tr>
            <th style="text-align: left; border-bottom: 1px solid black">
              Item
            </th>
            <th style="text-align: right; border-bottom: 1px solid black">
              Quantity
            </th>
            <th style="text-align: right; border-bottom: 1px solid black">
              Unit Price
            </th>
            <th style="text-align: right; border-bottom: 1px solid black">
              Total Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td style="border-bottom: 1px solid #ddd">{{ item.title }}</td>
            <td style="text-align: right; border-bottom: 1px solid #ddd">
              {{ item.quantity }}
            </td>
            <td style="text-align: right; border-bottom: 1px solid #ddd">
              {{ item.price.toFixed(2) }}$
            </td>
            <td style="text-align: right; border-bottom: 1px solid #ddd">
              {{ (item.price * item.quantity).toFixed(2) }}$
            </td>
          </tr>
        </tbody>
      </table>
      <div class="summary">
        <div class="subtotal">
          <p
            style="
              font-weight: bold;
              font-size: 18px;
              font-family: Quicksand, sans-serif;
            "
          >
            Subtotal:
          </p>
          <span
            style="
              font-weight: 700;
              font-size: 18px;
              font-family: Quicksand, sans-serif;
            "
            >{{ totalAmount.toFixed(2) }}$</span
          >
        </div>
        <div class="shipping">
          <p
            style="
              font-weight: bold;
              font-size: 18px;
              font-family: Quicksand, sans-serif;
            "
          >
            Shipping:
          </p>
          <span
            style="
              font-weight: 700;
              font-size: 18px;
              font-family: Quicksand, sans-serif;
            "
            >{{ shipping }}$</span
          >
        </div>
        <div class="total">
          <p
            style="
              font-weight: bold;
              font-size: 18px;
              font-family: Quicksand, sans-serif;
            "
          >
            Total (tax incl.):
          </p>
          <span
            style="
              font-weight: 700;
              font-size: 18px;
              font-family: Quicksand, sans-serif;
            "
            >{{ (totalAmount + shipping).toFixed(2) }}$</span
          >
        </div>
        <div class="print">
          <button
            class="print-button"
            style="
              cursor: pointer;
              font-family: Quicksand, sans-serif;
              font-size: 18px;
            "
            @click="print"
          >
            Print
          </button>
          <button class="close-button" @click="$router.go(-1)">
            <span class="material-icons">close</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReceiptView",
  data() {
    return {
      cart: [],
      totalAmount: 0,
      shipping: 5,
    };
  },
  created() {
    const { cart, totalAmount, shipping } = this.$route.query;
    this.cart = JSON.parse(cart || "[]");
    this.totalAmount = parseFloat(totalAmount) || 0;
    this.shipping = parseFloat(shipping) || 5;
  },
  methods: {
    print() {
      window.print();
    },
  },
};
</script>

<style scoped>
.receipt {
  width: 1440px;
  height: 700px;
  display: flex;
  margin-left: -8%;
  margin-top: 1%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-left: -5%;
}

.summary {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 30%;
}

.subtotal,
.shipping,
.total {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.print {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.print-button {
  margin-top: 20%;
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.print-button:hover {
  background-color: #45a049;
}

.close-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: 20%;
  width: 30px;
  height: 30px;
  background-color: #e90909;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
