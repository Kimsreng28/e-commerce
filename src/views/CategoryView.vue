<template>
  <div class="category">
    <CategoryComponent
      v-for="category in categories"
      :key="category.id"
      :title="category.title"
      :image="category.image"
      :isSelected="isSelected(category.title)"
      @click="handleCategoryClick(category)"
      class="category-component"
    />
  </div>
</template>

<script>
import clothesImage from "../assets/images/clothing.png";
import electronicImage from "../assets/images/electronic.png";
import handBagImage from "../assets/images/handbag.png";
import walletImage from "../assets/images/wallet.png";
import CategoryComponent from "../components/Category_Component.vue";

export default {
  name: "CategoryView",
  components: {
    CategoryComponent,
  },
  data() {
    return {
      selectedCategory: "Clothes",
      categories: [
        {
          id: 1,
          title: "Electronic",
          image: electronicImage,
          route: "/electronics",
        },
        {
          id: 2,
          title: "Hand Bags",
          image: handBagImage,
          route: "/handBags",
        },
        {
          id: 3,
          title: "Wallet",
          image: walletImage,
          route: "/wallets",
        },
        {
          id: 4,
          title: "Clothes",
          image: clothesImage,
          route: "/home",
        },
      ],
    };
  },
  methods: {
    isSelected(categoryTitle) {
      return this.selectedCategory === categoryTitle;
    },
    handleCategoryClick(category) {
      this.selectedCategory = category.title;

      this.$router.push({ path: category.route });
    },
  },
};
</script>

<style scoped>
.category {
  width: 1480px;
  max-width: 365px;
  height: 385px;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 2%;
  margin-left: 1%;
}

.category-component {
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-component:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
