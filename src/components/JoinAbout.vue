<template>
  <div class="join" :style="{ backgroundColor: color }">
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <div class="name">
      <h1>{{ name }}</h1>
      <a
        :href="linked"
        target="_blank"
        rel="noopener noreferrer"
        style="text-decoration: underline; cursor: pointer"
        >{{ linked }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinAbout",
  props: {
    logo: String,
    name: String,
    linked: String,
    color: String,
  },
};
</script>

<style scoped>
.join {
  width: 1209px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 10%;
  padding: 2%;
  border-radius: 15px;
  box-shadow: 0 7px 5px rgba(130, 137, 92, 0.1);
}
.logo img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  box-shadow: 0 7px 5px rgba(130, 137, 92, 0.1);
}
.name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 5%;
}
.name h1,
.name a {
  color: #ffffff;
  font-size: 25px;
  font-weight: 500;
  font-family: Quicksand, sans-serif;
}
</style>
