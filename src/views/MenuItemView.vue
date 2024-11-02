<template>
  <hr />
  <div class="container">
    <MenuItemComponent
      :groupItems="[
        {
          name: 'Browse All Categories',
          icon: ['fas', 'border-all'],
          icon1: ['fas', 'caret-down'],
          iconColor: '#FFFFFF',
          fontWeight: 'bold',
        },
        {
          name: 'Hot Deals',
          icon: ['fas', 'fire'],
          iconColor: '#3BB77E',
          fontWeight: 'bold',
        },
        { name: 'Home', fontWeight: 'bold' },
        {
          name: 'Food',
          icon1: ['fas', 'caret-down'],
          iconColor: '#7E7E7E',
          fontWeight: 'bold',
        },
        {
          name: 'Vegetables',
          icon1: ['fas', 'caret-down'],
          iconColor: '#7E7E7E',
          fontWeight: 'bold',
        },
        { name: 'Drink', fontWeight: 'bold' },
        { name: 'Cookies', fontWeight: 'bold' },
        {
          name: 'Meat & Seafood',
          icon1: ['fas', 'caret-down'],
          iconColor: '#7E7E7E',
          fontWeight: 'bold',
        },
        { name: 'Bakery', fontWeight: 'bold' },
      ]"
    />
    <SupportCenter
      :imageSrc="'https://static.vecteezy.com/system/resources/previews/017/785/096/non_2x/headphone-icon-on-transparent-background-free-png.png'"
      :title="'099 777 888'"
      :support-text="'24/7 Support Center'"
      :image-width="'40px'"
      :image-height="'30px'"
      :margin-right="'-1px'"
      :support-font-size="'11px'"
    />
  </div>
  <hr />
</template>

<script>
import SupportCenter from "../components/Logo_component.vue";
import MenuItemComponent from "../components/MenuItem_component.vue";
export default {
  name: "MenuItemView",
  components: {
    SupportCenter,
    MenuItemComponent,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1%;
  width: 1480px;
}
hr {
  margin: 0.5%;
  color: #e5e5e5;
  width: 1500px;
}
</style>
