<template>
  <div class="signIn">
    <TitleComponent />
    <SingInComponent />
  </div>
</template>

<script>
import SingInComponent from "../components/SingIn_Component.vue";
import TitleComponent from "../components/Title_Component.vue";

export default {
  name: "SignInView",
  components: {
    TitleComponent,
    SingInComponent,
  },
};
</script>

<style scoped>
.signIn {
  width: 100%;
  max-width: 1500px;
  height: 1024px;
  display: flex;
  padding: 20px;
  margin-left: -9%;
  margin-top: 1%;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background: url(../assets/images/Bg/bg2.png),
    linear-gradient(90deg, rgba(22, 205, 132, 1) 11%, rgba(88, 159, 45, 1) 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 1500px) {
  .signIn {
    width: 100vw;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
  }

  .signIn > * {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
