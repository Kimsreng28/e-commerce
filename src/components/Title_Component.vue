<template>
  <div class="logo">
    <div class="left">
      <div class="Awesome">
        <h5>Awesome</h5>
      </div>
      <div class="shop">
        <h5>Shop</h5>
      </div>
    </div>

    <div class="right">
      <div class="icon">
        <i class="fa-solid fa-circle-question"></i>
      </div>
      <div class="need">
        <h2>Need Help</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title_Component",
  components: {},
};
</script>

<style scoped>
.logo {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2%;
  width: 1480px;
}
.left {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5%;
}
.Awesome {
  font-family: Poetsen One, sans-serif;
  font-size: 48px;
  text-shadow: 2px 5px 10px #8e938e;
}

.shop {
  font-family: Poetsen One, sans-serif;
  font-size: 48px;
  background: linear-gradient(#146a1a, #28d033);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.right {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}

.icon {
  cursor: pointer;
}

.need {
  font-family: Poetsen One, sans-serif;
  font-size: 14px;
}
</style>
