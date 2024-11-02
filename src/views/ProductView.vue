<template>
  <div class="product">
    <ProductComponent
      v-for="product in displayedProducts"
      :key="product.id"
      :title="product.title"
      :discount="product.discount"
      :images="product.images"
      :description="product.description"
      :oldPrice="product.oldPrice"
      :price="product.price"
    />
    <LoadMoreButton
      v-if="displayLimit < products.length"
      @load-more="loadMore"
    />
  </div>
</template>

<script>
import clotheImage from "../assets/images/clothing.png";
import LoadMoreButton from "../components/LoadMoreButton.vue";
import ProductComponent from "../components/Product_Component.vue";

export default {
  name: "ProductView",
  components: {
    ProductComponent,
    LoadMoreButton,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Trendy Clothing",
          discount: "20%",
          images: clotheImage,
          description: "This is a trendy clothing item with a 20% discount.",
          oldPrice: 100,
          price: 80,
        },
        {
          id: 2,
          discount: "15%",
          title: "Stylish Wear",
          images: clotheImage,
          description: "Comfortable and stylish clothes with a 15% discount.",
          oldPrice: 120,
          price: 102,
        },
        {
          id: 3,
          discount: "30%",
          title: "Casual Wear",
          images: clotheImage,
          description: "Get this stylish wear at 30% off for a limited time.",
          oldPrice: 150,
          price: 105,
        },
        {
          id: 4,
          discount: "25%",
          title: "Designer Wear",
          images: clotheImage,
          description:
            "A popular choice with a 25% discount. Limited stock available.",
          oldPrice: 200,
          price: 150,
        },
        {
          id: 5,
          discount: "10%",
          title: "High-Quality Wear",
          images: clotheImage,
          description: "High-quality fabric and stylish design with 10% off.",
          oldPrice: 90,
          price: 81,
        },
        {
          id: 6,
          discount: "50%",
          title: "Exclusive Offer",
          images: clotheImage,
          description: "Exclusive offer: get 50% off on this designer item.",
          oldPrice: 180,
          price: 90,
        },
        {
          id: 7,
          discount: "40%",
          title: "Premium Wear",
          images: clotheImage,
          description: "Fashion-forward clothes with a generous 40% discount.",
          oldPrice: 160,
          price: 96,
        },
        {
          id: 8,
          discount: "35%",
          title: "Premium Quality",
          images: clotheImage,
          description:
            "Premium quality clothes at a 35% discount. Don't miss out!",
          oldPrice: 140,
          price: 91,
        },
        {
          id: 9,
          discount: "45%",
          title: "Minimalist Style",
          images: clotheImage,
          description:
            "Sleek and comfortable, now at 45% off for a limited time.",
          oldPrice: 130,
          price: 71.5,
        },
        {
          id: 10,
          discount: "5%",
          title: "End-of-Season Sale",
          images: clotheImage,
          description: "Minimalist style with a 5% discount for this season.",
          oldPrice: 110,
          price: 104.5,
        },
        {
          id: 11,
          discount: "60%",
          title: "End-of-Season Sale",
          images: clotheImage,
          description: "End-of-season sale with 60% off this stylish piece.",
          oldPrice: 200,
          price: 80,
        },
        {
          id: 12,
          discount: "55%",
          title: "Best-Seller",
          images: clotheImage,
          description:
            "Best-seller with a 55% discount. Limited quantities available.",
          oldPrice: 150,
          price: 67.5,
        },
      ],
      displayLimit: 6,
    };
  },
  computed: {
    displayedProducts() {
      return this.products.slice(0, this.displayLimit);
    },
  },
  methods: {
    loadMore() {
      this.displayLimit += 6;
    },
  },
};
</script>

<style scoped>
.product {
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
