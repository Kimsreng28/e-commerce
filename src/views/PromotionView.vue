<template>
  <div class="promotion">
    <PromotionComponent
      v-for="promotion in promotions"
      :key="promotion.id"
      :title="promotion.title"
      :description="promotion.description"
      :buttonName="promotion.buttonName"
      :image="promotion.image"
      :backgroundColor="promotion.backgroundColor"
      @click="goToPromotionPage(promotion.id)"
    />
  </div>
</template>

<script>
import coupongImage from "../assets/images/coupong.png";
import deliveryImage from "../assets/images/delivery.png";
import giftImage from "../assets/images/gift-card.png";
import PromotionComponent from "../components/Promotion_Component.vue";
export default {
  name: "PromotionView",
  components: {
    PromotionComponent,
  },
  data() {
    return {
      // Correctly return the data object
      promotions: [
        {
          id: 1,
          title: "Coupon Saving ",
          description: "Up to 60% all everyday essentials",
          buttonName: "Shop Coupons",
          image: coupongImage,
          backgroundColor: "#578BE0",
        },
        {
          id: 2,
          title: "Free Delivery",
          description: "with selected items",
          buttonName: "Delivery Now",
          image: deliveryImage,
          backgroundColor: "#EB6868",
        },
        {
          id: 3,
          title: "Gift Voucher",
          description: "with personal core items",
          buttonName: "Gift Now",
          image: giftImage,
          backgroundColor: "#F1CB5E",
        },
      ],
    };
  },
  methods: {
    goToPromotionPage(promotionId) {
      let routePath = "";

      switch (promotionId) {
        case 1:
          routePath = "/coupons";
          break;
        case 2:
          routePath = "/delivery";
          break;
        case 3:
          routePath = "/gift";
          break;
      }

      this.$router.push({ path: routePath });
    },
  },
};
</script>

<style scoped>
.promotion {
  width: 1480px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2%;
  margin-top: 3%;
  margin-left: 1.5%;
}
</style>
