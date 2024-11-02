<template>
  <div class="productDetailsView">
    <ElectronicDetail
      v-for="product in products"
      :key="product.id"
      :apparent1="product.apparent1"
      :apparent2="product.apparent2"
    />

    <CommentReview />

    <Checkout v-if="showCheckout" :cartItems="cartItems" />
  </div>
</template>

<script>
import CommentReview from "@/components/CommentReview.vue";
import Checkout from "@/views/CheckOutView.vue";
import ElectronicDetail from "../electronics/ElectronicDetail.vue";
export default {
  name: "ProductDetailView",
  components: {
    ElectronicDetail,
    CommentReview,
    Checkout,
  },

  data() {
    return {
      products: [
        {
          apparent1: "Male Shirt",
          apparent2: "Color red",
        },
      ],
      showCheckout: false,
      cartItems: [],
    };
  },

  methods: {
    openCheckout(product) {
      const existingProduct = this.cartItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
      this.showCheckout = true;
    },
  },
};
</script>

<style scoped>
.productDetailsView {
  width: 1480px;
  max-width: 1077px;
  height: 995px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2%;
  margin-top: 2%;
}
</style>
