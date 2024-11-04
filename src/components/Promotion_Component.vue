<template>
  <div class="promotionComponent" :style="{ backgroundColor: backgroundColor }">
    <div class="bg">
      <div class="textTitle">
        <h1
          style="
            font-weight: 700;
            font-size: 30px;
            font-family: Quicksand, sans-serif;
            color: #ffffff;
          "
        >
          {{ title }}
        </h1>
        <p
          style="
            font-weight: 700;
            font-size: 16px;
            font-family: Quicksand, sans-serif;
            color: #ffffff;
          "
        >
          {{ description }}
        </p>
      </div>
      <div class="button">
        <button>{{ buttonName }}</button>
      </div>
    </div>
    <div class="image">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
  },
};
</script>

<style scoped>
.promotionComponent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 463px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
}

.bg {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 5%;
  width: 60%;
  height: 100%;
}

.textTitle {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10%;
}

.button {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15%;
}

.button button {
  width: 200px;
  height: 50px;
  font-family: Poetsen One, sans-serif;
  font-size: 18px;
  font-weight: 500;
  border: none;
  display: inline-block;
  border-radius: 10px;
  background-color: rgb(213, 224, 221);
  color: #524b4b;
  cursor: pointer;
  transition: background-color 0.3s, ease-out 0.4s;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  box-shadow: inset 0 0 0 0 #0dc767;
}

.button button:hover {
  box-shadow: inset 0 -100px 0 0 #0dc767;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image img {
  width: 146px;
  height: 125px;
  object-fit: cover;
  filter: drop-shadow(0 0 0.75rem #baafb2);
  margin-top: 10%;
  margin-left: -15%;
}
</style>
