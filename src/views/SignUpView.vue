<template>
  <div class="signUp">
    <TitleComponent />
    <SingUpComponent />
  </div>
</template>

<script>
import SingUpComponent from "../components/SingUp_Component.vue";
import TitleComponent from "../components/Title_Component.vue";

export default {
  name: "SignUpView",
  components: {
    TitleComponent,
    SingUpComponent,
  },
};
</script>

<style scoped>
.signUp {
  width: 100%;
  max-width: 1500px;
  height: 1100px;
  display: flex;
  padding: 20px;
  margin-left: -9%;
  margin-top: 1%;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  background: url(../assets/images/Bg/bg2.png),
    linear-gradient(90deg, rgba(22, 205, 132, 1) 11%, rgba(88, 159, 45, 1) 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
