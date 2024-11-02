<template>
  <div class="container" :style="containerStyle">
    <div class="text-card">
      <div class="title-card">
        <h1>{{ titleBox }}</h1>
      </div>
      <div class="description-card">
        <p>{{ descriptionBox }}</p>
      </div>
    </div>

    <div class="image-card">
      <img :src="imageBox" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleBox",
  props: {
    titleBox: String,
    descriptionBox: String,
    imageBox: String,
    gradientStart: {
      type: String,
      default: "rgba(203, 191, 191, 1)",
    },
    gradientEnd: {
      type: String,
      default: "rgba(40, 208, 91, 1)",
    },
  },
  computed: {
    containerStyle() {
      return {
        background: `linear-gradient(90deg, ${this.gradientStart} 0%, ${this.gradientEnd} 100%)`,
      };
    },
  },
};
</script>

<style scoped>
.container {
  width: 1209px;
  height: 217px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 1%;
  border-radius: 10px;
  overflow: hidden;
  padding-left: 50px;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
}

.container::before {
  content: "";
  position: absolute;
  top: -50px;
  left: -200px;
  width: 450px;
  height: 300px;
  background: url(../assets/images/Bg/clouds.png) no-repeat;
  background-size: contain;
  transform: rotate(45.59deg);
  z-index: 0;
}
.text-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.image-card {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.image-card img {
  width: 130px;
  height: 130px;
  filter: drop-shadow(5px 10px 4px #3e3e4d);
}
.title-card,
.description-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-card h1 {
  font-family: Quicksand, sans-serif;
  width: 500px;
  font-size: 48px;
  color: #000000;
  font-weight: bold;
}
.description-card p {
  font-family: Quicksand, sans-serif;
  font-size: 24px;
  color: #000000;
  font-weight: 400;
}
</style>
