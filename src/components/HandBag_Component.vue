<template>
  <div class="productComponent">
    <div class="discount">
      <h2>{{ discount }}</h2>
    </div>

    <div class="image">
      <img :src="images" alt="" />
    </div>

    <div class="titleProduct">
      <p
        style="
          font-family: Quicksand, sans-serif;
          font-weight: 700;
          font-size: 24px;
        "
      >
        {{ title }}
      </p>
    </div>

    <div class="description-product">
      <p>{{ description }}</p>
    </div>

    <div class="price">
      <div class="priceTotal">
        <span
          class="old-price"
          style="
            color: #ff0000;
            text-decoration: line-through;
            font-size: 24px;
            font-weight: 700;
            font-family: Quicksand, sans-serif;
          "
          >${{ oldPrice }}</span
        >
        <span
          class="current-price"
          style="
            color: #4ee77c;
            font-size: 30px;
            font-weight: 700;
            font-family: Quicksand, sans-serif;
          "
          >${{ price }}</span
        >
      </div>
      <div class="add-cart">
        <button
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 2%;
          "
          @click="goToDetails"
        >
          <span class="material-symbols-outlined"> shopping_cart </span>Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HandBag_Component",
  props: {
    id: Number,

    title: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: [String, Number],
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push({
        path: "/handBagDetails",
        query: {
          id: this.id,
          title: this.title,
          discount: this.discount,
          images: this.images,
          description: this.description,
          oldPrice: this.oldPrice,
          price: this.price,
        },
      });
    },
  },
};
</script>

<style scoped>
.productComponent {
  width: 330px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #e9dbdb;
  border-radius: 20px;
  box-shadow: 0 7px 5px rgba(130, 137, 92, 0.1);
}

.titleProduct {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 80px;
  margin-top: 5%;
}

.discount {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 57px;
  height: 28px;
  background-color: #fbbc05;
  border-radius: 5px;
  margin-top: 3%;
  margin-left: 70%;
}

.discount h2 {
  font-size: 16px;
  font-weight: 500;
  font-family: Quicksand, sans-serif;
  color: #000000;
}

.image img {
  margin-top: 20%;
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.description-product {
  display: flex;
  width: 300px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
}

.description-product p {
  font-size: 14px;
  font-weight: 500;
  font-family: Poetsen One, sans-serif;
  color: #4e4040;
  text-align: center;
}

.price {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin-top: 2%;
}
.priceTotal {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: 2%;
}

.add-cart button {
  width: 100px;
  height: 45px;
  background-color: #4ee77c;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  font-family: Quicksand, sans-serif;
  color: #000000;
  cursor: pointer;
  box-shadow: 0 7px 5px rgba(215, 223, 52, 0.1);
  transition: background-color 0.3s;
}

.add-cart button:hover {
  transform: scale(1.05);
  filter: opacity(80%);
}
</style>
