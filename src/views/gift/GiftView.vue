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
    </div>
  </div>
</template>

<script>
import Gift from "@/assets/images/Bg/heart.png";
import TitleBox from "@/components/TitleBox.vue";
import LandingBar from "../LandingBar.vue";
export default {
  name: "GiftView",
  components: {
    TitleBox,
    LandingBar,
  },
  data() {
    return {
      profileImageUrl: localStorage.getItem("userProfileImage") || "",
      boxes: [
        {
          id: 1,
          titleBox: "Gift For You",
          descriptionBox: "Please register here free gift for you",
          imageBox: Gift,
          gradientStart: "#CBBFBF",
          gradientEnd: "#1877F2",
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
