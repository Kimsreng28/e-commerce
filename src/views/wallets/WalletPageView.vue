<template>
  <div class="landing">
    <LandingBar :profileImageUrl="profileImageUrl" />
    <ShowCaseComponent
      v-for="(background, index) in backgrounds"
      :key="index"
      :bg-src-first="background.bgSrcFirst"
      :bg-src-second="background.bgSrcSecond"
    />
    <PromotionView />
    <div class="split">
      <CategoryView class="custom-category" />
      <WalletView />
    </div>
  </div>
</template>

<script>
import Wallets from "@/assets/images/BgWallet/wallets.png";
import Wallets1 from "@/assets/images/BgWallet/wallets2.png";
import ShowCaseComponent from "@/components/ShowCase_Component.vue";
import CategoryView from "@/views/CategoryView.vue";
import LandingBar from "@/views/LandingBar.vue";

import PromotionView from "@/views/PromotionView.vue";
import WalletView from "../wallets/WalletView.vue";
// import ProductDetailView from "./ProductDetailView.vue";
export default {
  components: {
    LandingBar,
    ShowCaseComponent,
    PromotionView,
    CategoryView,
    WalletView,
    // ProductDetailView,
  },
  name: "WalletPageView",
  data() {
    return {
      backgrounds: [
        {
          bgSrcFirst: Wallets,
          bgSrcSecond: Wallets1,
        },
      ],
      profileImageUrl: localStorage.getItem("userProfileImage") || "",
    };
  },
  methods: {
    updateProfileImage(imageUrl) {
      this.profileImageUrl = imageUrl;
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
