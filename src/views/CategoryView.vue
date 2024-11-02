<template>
  <div class="add">
    <div class="bar">
      <NavBarView />
    </div>

    <div class="menuItem">
      <MenuItemView />
    </div>

    <div class="case">
      <ShowCaseRoute />
    </div>
  </div>
</template>

<script>
import ShowCaseRoute from "../components/ShowCaseRoute.vue";
import MenuItemView from "../views/MenuItemView.vue";
import NavBarView from "../views/NavBarView.vue";

export default {
  name: "CategoryView",
  components: {
    ShowCaseRoute,
    MenuItemView,
    NavBarView,
  },
};
</script>

<style scoped>
.add {
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  margin-left: -10%;
  margin-top: -20%;
  justify-content: center;
}
</style>
