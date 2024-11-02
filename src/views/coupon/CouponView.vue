<template>
  <div class="containerCoupon">
    <LandingBar :profileImageUrl="profileImageUrl" />
    <div class="bgContain">
      <div class="backShopping" @click="$router.go(-1)">
        <span class="material-icons"> arrow_back </span>
        <p>Back to shopping</p>
      </div>

      <div class="coupon">
        <TitleBox
          v-for="box in boxes"
          :key="box.id"
          :titleBox="box.titleBox"
          :descriptionBox="box.descriptionBox"
          :imageBox="box.imageBox"
          :gradientStart="box.gradientStart"
          :gradientEnd="box.gradientEnd"
        />
      </div>

      <div class="couponCard">
        <CardDiscount
          v-for="card in cards"
          :key="card.id"
          :discountNum="card.discountNum"
          :gradientStart="card.gradientStart"
          :gradientEnd="card.gradientEnd"
          :button-color="card.buttonColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Coupon from "@/assets/images/Bg/coupon.png";
import CardDiscount from "@/components/CardDiscount.vue";
import TitleBox from "@/components/TitleBox.vue";
import LandingBar from "../LandingBar.vue";
export default {
  name: "CouponView",
  components: {
    TitleBox,
    LandingBar,
    CardDiscount,
  },
  data() {
    return {
      profileImageUrl: localStorage.getItem("userProfileImage") || "",
      boxes: [
        {
          id: 1,
          titleBox: "Coupon Saving",
          descriptionBox: "Here coupon card is under!",
          imageBox: Coupon,
          gradientStart: "#CBBFBF",
          gradientEnd: "#28D05B",
        },
      ],
      cards: [
        {
          id: 1,
          discountNum: "50%",
          gradientStart: "#F8BF1C",
          gradientEnd: "#A68B3D",
          buttonColor: "#0DCC46",
        },
        {
          id: 2,
          discountNum: "30%",
          gradientStart: "#0DCC46",
          gradientEnd: "#167C35",
          buttonColor: "#F8BF1C",
        },
        {
          id: 3,
          discountNum: "10%",
          gradientStart: "#EA4335",
          gradientEnd: "#A68B3D",
          buttonColor: "#0DCC46",
        },
      ],
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
.containerCoupon {
  width: 100%;
  max-width: 1500px;
  height: auto;
  display: flex;
  margin-left: -8.5%;
  margin-top: 1%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.bgContain {
  width: 1460px;
  height: 1943px;
  background-color: #716868;
  border-radius: 10px;
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.backShopping {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
  margin-left: -80%;
  gap: 10px;
  cursor: pointer;
  color: white;
  font-size: 24px;
}
.backShopping p {
  font-weight: 700;
  font-family: Quicksand, sans-serif;
}
.coupon {
  margin-top: 5%;
}
</style>
