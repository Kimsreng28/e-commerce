<template>
  <div class="landingBar">
    <TitleComponent class="title" />

    <div class="button" @click="$router.push('/join')">
      <button>Join</button>
    </div>

    <button @click="$router.push('/profile')">
      <img :src="profileImageUrl" alt="" class="profile-icon" />
    </button>

    <button @click="$router.push('/cart')">
      <span class="material-symbols-outlined"> shopping_cart </span>
    </button>
  </div>
</template>

<script>
import TitleComponent from "../components/Title_Component.vue";

export default {
  name: "LandingBar",
  components: {
    TitleComponent,
  },
  props: {
    profileImageUrl: String,
  },
};
</script>

<style scoped>
.landingBar {
  width: 1480px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1%;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button button {
  width: 105px;
  height: 40px;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
  background-color: #a49292;
  color: #ffffff;
}
.button button:hover {
  filter: brightness(80%);
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.profile-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
