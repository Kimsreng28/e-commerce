<template>
  <div class="landing">
    <LandingBar :profileImageUrl="profileImageUrl" />
    <ShowCaseComponent
      v-for="(background, index) in backgrounds"
      :key="index"
      :bg-src-first="background.bgSrcFirst"
      :bg-src-second="background.bgSrcSecond"
      @search="handleSearch"
    />
    <PromotionView />
    <div class="split">
      <CategoryView class="custom-category" />
      <ProductView :searchQuery="searchQuery" />
    </div>
  </div>
</template>

<script>
import Clothes from "../assets/images/clothes.png";
import ClothNew from "../assets/images/clothnew.png";
import ShowCaseComponent from "../components/ShowCase_Component.vue";
import CategoryView from "../views/CategoryView.vue";
import LandingBar from "../views/LandingBar.vue";
import ProductView from "../views/ProductView.vue";
import PromotionView from "../views/PromotionView.vue";
export default {
  components: {
    LandingBar,
    ShowCaseComponent,
    PromotionView,
    CategoryView,
    ProductView,
    // ProductDetailView,
  },
  name: "LandingPageView",
  data() {
    return {
      backgrounds: [
        {
          bgSrcFirst: ClothNew,
          bgSrcSecond: Clothes,
        },
      ],
      profileImageUrl: localStorage.getItem("userProfileImage") || "",
      searchQuery: "",
    };
  },
  methods: {
    updateProfileImage(imageUrl) {
      this.profileImageUrl = imageUrl;
    },
    handleSearch(query) {
      this.searchQuery = query;
    },
  },
};
</script>

<style scoped>
.landing {
  width: 100%;
  max-width: 1500px;
  height: 3000px;
  display: flex;
  margin-left: -8.5%;
  margin-top: 1%;
  align-items: center;
  flex-direction: column;
}

.split {
  display: flex;
  flex-direction: row;
  gap: 2%;
}
</style>
