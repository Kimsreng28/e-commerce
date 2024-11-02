<template>
  <div class="joinUs">
    <LandingBar :profileImageUrl="profileImageUrl" />
    <div class="containerJoin">
      <div class="backShopping" @click="$router.go(-1)">
        <span class="material-icons"> arrow_back </span>
        <p>Back to shopping</p>
      </div>

      <div class="joinAbout">
        <JoinAbout
          v-for="join in joins"
          :key="join.id"
          :logo="join.logo"
          :name="join.name"
          :linked="join.linked"
          :color="join.color"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Facebook from "@/assets/images/join/communication.png";
import Instagram from "@/assets/images/join/instagram.png";
import Telegram from "@/assets/images/join/telegram.png";
import JoinAbout from "@/components/JoinAbout.vue";
import LandingBar from "../LandingBar.vue";
export default {
  name: "JoinView",
  components: {
    LandingBar,
    JoinAbout,
  },
  data() {
    return {
      profileImageUrl: localStorage.getItem("userProfileImage") || "",
      joins: [
        {
          id: 1,
          logo: Instagram,
          name: "Instagram",
          linked: "https://www.instagram.com/",
          color: "#e1306c",
        },
        {
          id: 2,
          logo: Facebook,
          name: "Facebook",
          linked: "https://www.facebook.com/",
          color: "#1877f2",
        },
        {
          id: 3,
          logo: Telegram,
          name: "Telegram",
          linked: "https://telegram.org/",
          color: "#1da1f2",
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
.joinUs {
  width: 100%;
  max-width: 1500px;
  height: auto;
  display: flex;
  margin-left: -8.5%;
  margin-top: 1%;
  align-items: center;
  flex-direction: column;
}
.containerJoin {
  width: 1460px;
  height: 1943px;
  background-color: #857676;
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
</style>
