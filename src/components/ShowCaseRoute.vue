<template>
  <div class="showcase">
    <div class="titleCase">
      <h1 style="font-weight: bold; margin-top: 5%; line-height: 1.2">
        Coke & Milk
      </h1>
    </div>
    <div class="description">
      <p style="margin-top: 10%">Home > Categories > Coke & Milk</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCaseRoute",
};
</script>

<style scoped>
.showcase {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1%;
  width: 1480px;
  height: 235px;
  border: none;
  border-radius: 15px;
  background-color: rgb(241, 219, 185);
  position: relative;
}

.showcase::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background: url("../assets/images/bg3.png") center/cover no-repeat;
  opacity: 0.2;
  z-index: 1;
}

.titleCase {
  font-size: 20px;
  font-family: Quicksand, sans-serif;
  color: #253d4e;
  margin-left: 5%;
}
.description {
  font-size: 20px;
  font-family: Lato, sans-serif;
  color: #7e7e7e;
  margin-left: 5%;
}
</style>
