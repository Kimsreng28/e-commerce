<template>
  <div class="product-detail">
    <div class="image-product">
      <div class="discount">
        <h2>{{ productDetail.discount }}</h2>
      </div>

      <div class="imageOfProduct">
        <img :src="productDetail.image" alt="" />
      </div>

      <div class="moreImages">
        <img
          v-for="(image, index) in Thumbnails"
          :key="index"
          :src="image.image"
          @click="changeImage(image)"
          alt=""
        />
      </div>
    </div>

    <div class="description-product">
      <div class="titleBar">
        <div class="titleOfProduct">
          <h3>{{ productDetail.title }}</h3>
        </div>
        <div class="priceTotal">
          <span
            class="old-price"
            style="
              color: #ff0000;
              text-decoration: line-through;
              font-size: 32px;
              font-weight: 700;
              font-family: Quicksand, sans-serif;
            "
            >${{ productDetail.oldPrice }}</span
          >
          <span
            class="current-price"
            style="
              color: #4ee77c;
              font-size: 32px;
              font-weight: 700;
              font-family: Quicksand, sans-serif;
            "
            >${{ productDetail.price }}</span
          >
        </div>
      </div>

      <div class="descriptionDetails">
        <p>{{ productDetail.description }}</p>
      </div>

      <div class="add-cart">
        <button
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2%;
          "
          @click="addToCart"
        >
          <span class="material-symbols-outlined"> shopping_cart </span>Cart
        </button>
        <button
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2%;
          "
          @click="addToCheckout"
        >
          <span class="material-icons"> add </span> Add
        </button>
      </div>

      <div v-if="successMessage" class="success-message">
        <p>{{ successMessage }}</p>
      </div>

      <div class="apparent">
        <div class="h1">
          <h1>{{ apparent1 }}</h1>
        </div>
        <div class="h2">
          <h1>{{ apparent2 }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clothed from "../assets/images/clothing.png";
export default {
  name: "ProductDetail",
  props: {
    discount: String,
    image: String,
    title: String,
    oldPrice: String,
    price: String,
    description: String,
    apparent1: String,
    apparent2: String,
    id: Number,
  },
  data() {
    return {
      imagesChange: this.$route.query.images,
      quantity: 1,
      successMessage: "",
      Thumbnails: [
        {
          id: 1,
          image: clothed,
        },
        {
          id: 2,
          image: clothed,
        },
        {
          id: 3,
          image: clothed,
        },
      ],
    };
  },
  computed: {
    productDetail() {
      return {
        discount: this.$route.query.discount || this.discount,
        title: this.$route.query.title || this.title,
        image: this.$route.query.images,
        oldPrice: parseFloat(this.$route.query.oldPrice || this.oldPrice),
        price: parseFloat(this.$route.query.price || this.price),
        description: this.$route.query.description || this.description,
      };
    },
  },
  methods: {
    changeImage(image) {
      this.imagesChange = image;
    },
    addToCart() {
      this.$router.push({
        path: "/cart",
        query: {
          title: this.productDetail.title,
          price: this.productDetail.price,
          image: this.productDetail.image,
        },
      });
    },
    addToCheckout() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingItem = cart.find(
        (item) => item.title === this.productDetail.title
      );
      if (existingItem) {
        existingItem.quantity += this.quantity;
      } else {
        cart.push({ ...this.productDetail, quantity: this.quantity });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      this.successMessage = `${this.quantity} item(s) successfully added to cart!`;

      setTimeout(() => {
        this.successMessage = "";
        this.$router.push({ name: "cart" });
      }, 2000);
    },
  },
};
</script>

<style scoped>
.product-detail {
  background-color: #716868;
  width: 1078px;
  height: 480px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  gap: 2%;
  border-radius: 20px;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
}

.image-product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 315px;
  height: 430px;
  background-color: #ffffff;
  border-radius: 20px;
}

.description-product {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 680px;
  height: 430px;
}

.titleBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 680px;
}
.titleOfProduct {
  margin-left: 2%;
}
.priceTotal {
  display: flex;
  flex-direction: row;
  margin-left: 2%;
  gap: 10%;
}

.titleOfProduct h3 {
  font-size: 36px;
  font-weight: bold;
  font-family: Quicksand, sans-serif;
  color: #ffffff;
}

.moreImages {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10%;
  margin-top: 20%;
  width: 79px;
  height: 96px;
}
.moreImages img {
  width: 80px;
  height: 80px;
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.2s;
  object-fit: cover;
  filter: drop-shadow(0 0 0.2rem #554e4f);
}

.moreImages img:hover {
  transform: scale(1.1);
}

.imageOfProduct img {
  width: 178px;
  height: 178px;
  cursor: pointer;
  margin-top: 15%;
  object-fit: cover;
  filter: drop-shadow(0 0 0.6rem #554e4f);
}
.discount {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 28px;
  background-color: #fbbc05;
  border-radius: 5px;

  margin-left: 70%;
}

.discount h2 {
  font-size: 16px;
  font-weight: 500;
  font-family: Quicksand, sans-serif;
  color: #000000;
}

.descriptionDetails {
  font-size: 18px;
  margin-top: 10%;
  margin-left: 2%;
}

.descriptionDetails p {
  color: #ffffff;
  font-family: Quicksand, sans-serif;
}

.add-cart {
  display: flex;
  margin-left: 2%;
  margin-top: 15%;
  gap: 2%;
}

.add-cart button {
  width: 100px;
  height: 45px;
  background-color: #4ee77c;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  font-family: Quicksand, sans-serif;
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.3s, ease-out 0.4s;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  box-shadow: inset 0 0 0 0 #07c5eb;
}

.add-cart button:hover {
  box-shadow: inset 0 100px 0 0 #07c5eb;
}

.apparent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2%;
  margin-left: 2%;
  margin-top: 10%;
}

.h1,
.h2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2%;
  cursor: pointer;
  width: 140px;
  height: 45px;
  background-color: #c7bcbc;
  border-radius: 10px;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
}
h1 {
  font-size: 18px;
  font-weight: bold;
  font-family: Quicksand, sans-serif;
  color: #1d304a;
}

.success-message {
  color: #4ee77c;
  font-size: 14px;
  font-weight: 700;
  margin-left: 40%;
  margin-top: -5%;
  font-family: Quicksand, sans-serif;
}
</style>
