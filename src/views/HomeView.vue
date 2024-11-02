<template>
  <div class="add">
    <div class="bar">
      <NavBarView />
    </div>

    <div style="margin-top: -2%" class="menuItem">
      <RouterLink to="/categories">
        <MenuItemView />
      </RouterLink>
    </div>

    <div class="case">
      <ShowCase />
    </div>

    <div class="menuCom">
      <MenuComponent :title="categoryTitle" :groups="groups" />
    </div>

    <div>
      <RouterLink to="/categories">
        <div class="categories">
          <CategoryCard
            v-for="(category, index) in categories"
            :key="index"
            :title="category.title"
            :itemCount="category.itemCount"
            :imageSrc="category.imageSrc"
            :backgroundColor="category.backgroundColor"
          />
        </div>
      </RouterLink>
    </div>

    <div>
      <RouterLink to="/products">
        <div class="promotion">
          <Promotion
            v-for="(promo, index) in promotions"
            :key="index"
            :title="promo.title"
            :buttonText="promo.buttonText"
            :imageSrc="promo.imageSrc"
            :backgroundColor="promo.backgroundColor"
            :buttonBackgroundColor="promo.buttonBackgroundColor"
          />
        </div>
      </RouterLink>
    </div>

    <div class="menuCom">
      <MenuComponent :title="productTitle" :groups="groups" />
    </div>

    <div>
      <RouterLink to="/products">
        <div class="productCom">
          <ProductComponent :products="products" />
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../components/Category_component.vue";
import MenuComponent from "../components/Menu_component.vue";
import ProductComponent from "../components/Product_component.vue";
import Promotion from "../components/Promotion_component.vue";
import ShowCase from "../components/ShowCase_component.vue";
import MenuItemView from "../views/MenuItemView.vue";
import NavBarView from "../views/NavBarView.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

export default {
  name: "App",
  components: {
    MenuComponent,
    CategoryCard,
    Promotion,
    ProductComponent,
    MenuItemView,

    FontAwesomeIcon,
    NavBarView,
    ShowCase,
  },
  data() {
    return {
      categoryTitle: "Featured Categories",
      productTitle: "Popular Products",
      groups: [
        "All",
        "Milks & Diaries",
        "Coffees & Teas",
        "Pet Foods",
        "Meats",
        "Vegetables",
        "Fruits",
      ],
      categories: [
        {
          title: "Cake & Milk",
          itemCount: 14,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20230216/ourmid/pngtree-juicy-burgers-with-a-transparent-background-png-image_6603069.png",
          backgroundColor: "#F2FCE4",
        },
        {
          title: "Peach",
          itemCount: 17,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20230417/original/pngtree-yellow-peach-fruit-leaves-transparent-png-image_9059837.png",
          backgroundColor: "#FFFCEB",
        },
        {
          title: "Organic Kiwi",
          itemCount: 21,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20220818/ourmid/pngtree-kiwi-fruits-png-image_6114318.png",
          backgroundColor: "#ECFFEC",
        },
        {
          title: "Red Apple",
          itemCount: 68,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20230110/ourmid/pngtree-fresh-red-apple-png-image_6558046.png",
          backgroundColor: "#FEEFEA",
        },
        {
          title: "Snack",
          itemCount: 16,
          imageSrc:
            "https://www.pngplay.com/wp-content/uploads/13/Snack-Transparent-Background.png",
          backgroundColor: "#FFF3EB",
        },
        {
          title: "Black Plum",
          itemCount: 25,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20220303/original/pngtree-black-plum-green-leaf-half-plum-hand-drawn-png-image_7386586.png",
          backgroundColor: "#FFF3FF",
        },
        {
          title: "Vegetables",
          itemCount: 65,
          imageSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/035/047/756/small_2x/ai-generated-high-quality-photo-of-fresh-green-cabbage-vegetable-png.png",
          backgroundColor: "#F2FCE4",
        },
        {
          title: "Headphone",
          itemCount: 33,
          imageSrc:
            "https://i.pinimg.com/originals/86/c1/ac/86c1ac8bac43ea337f7fe9da5c87a7fd.png",
          backgroundColor: "#FFFCEB",
        },
        {
          title: "Cake & Milk",
          itemCount: 54,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20230927/original/pngtree-covered-cake-milk-sweet-png-image_13146191.png",
          backgroundColor: "#F2FCE4",
        },
        {
          title: "Orange",
          itemCount: 63,
          imageSrc: "https://pngimg.com/d/orange_PNG792.png",
          backgroundColor: "#FFF3FF",
        },
      ],
      promotions: [
        {
          title: "Everyday Fresh & Clean with Our Products",
          buttonText: "Shop Now",
          imageSrc: "https://pngimg.com/uploads/onion/onion_PNG3821.png",
          backgroundColor: "#F0E8D5",
          buttonBackgroundColor: "#3BB77E",
        },
        {
          title: "Make your Breakfast Healthy and Easy",
          buttonText: "Shop Now",
          imageSrc:
            "https://png.pngtree.com/png-clipart/20221107/ourmid/pngtree-kawaii-strawberry-milk-png-image_6427767.png",
          backgroundColor: "#F3E8E8",
          buttonBackgroundColor: "#3BB77E",
        },
        {
          title: "The best Organic Products Online",
          buttonText: "Shop Now",
          imageSrc:
            "https://png.pngtree.com/png-vector/20240708/ourmid/pngtree-fresh-vegetables-with-wicker-basket-png-image_13008114.png",
          backgroundColor: "#E7EAF3",
          buttonBackgroundColor: "#FDC040",
        },
      ],
      products: [
        {
          id: 1,
          tag: "-17%",
          tagColor: "#3BB77E",
          image: "https://pngimg.com/d/mango_PNG9168.png",
          category: "Hodo Foods",
          name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
          rate: "4.0",
          description: "500 gram",
          sellPrice: "2.80",
          discountPrice: 2.51,
        },
        {
          id: 2,
          tag: "Hot",
          tagColor: "#FD6E6E",
          image:
            "https://freepngimg.com/thumb/corn/35343-5-sweet-corn-thumb.png",
          category: "Hodo Foods",
          name: "All Natural Italian-Style Chicken Meatballs",
          rate: "4.0",
          description: "500 gram",
          sellPrice: "2.80",
          discountPrice: 2.51,
        },
        {
          id: 3,
          tag: "Sale",
          tagColor: "#FDC040",
          image:
            "https://static.vecteezy.com/system/resources/thumbnails/022/787/331/small/orange-fruit-with-leaves-transparent-background-generative-ai-png.png",
          category: "Hodo Foods",
          name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
          rate: "4.0",
          description: "500 gram",
          sellPrice: "2.80",
          discountPrice: 2.51,
        },
        {
          id: 4,
          tag: "",
          image:
            "https://png.pngtree.com/png-vector/20240708/ourmid/pngtree-spicy-red-chilli-powder-in-bowl-with-super-3d-chilly-a-png-image_13030471.png",
          category: "Hodo Foods",
          name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
          rate: "4.0",
          description: "500 gram",
          sellPrice: "2.80",
          discountPrice: 2.51,
        },
        {
          id: 5,
          tag: "",
          image:
            "https://png.pngtree.com/png-clipart/20231018/original/pngtree-lemons-bowl-still-life-png-image_13342565.png",
          category: "Hodo Foods",
          name: "Blue Diamond Almonds Lightly Salted Vegetables",
          rate: "4.0",
          description: "500 gram",
          sellPrice: "2.80",
          discountPrice: 2.51,
        },
        {
          id: 6,
          tag: "",
          image: "https://pngimg.com/d/beef_PNG54.png",
          category: "Hodo Foods",
          name: "Chobani Complete Vanilla Greek Yogurt",
          rate: "4.0",
          description: "500 gram",
          sellPrice: "2.80",
          discountPrice: 2.51,
        },
        {
          id: 7,
          tag: "Sale",
          tagColor: "#FDC040",
          image: "https://pngimg.com/d/steak_PNG32.png",
          category: "Hodo Foods",
          name: "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
          rate: "4.0",
          description: "500 gram",
          sellPrice: "2.80",
          discountPrice: 2.51,
        },
        {
          id: 8,
          tag: "",
          image:
            "https://png.pngtree.com/png-vector/20240124/ourlarge/pngtree-grilled-salmon-food-png-image_11484293.png",
          category: "Hodo Foods",
          name: "Encore Seafoods Stuffed Alaskan Salmon",
          rate: "4.0",
          description: "500 gram",
          sellPrice: "2.80",
          discountPrice: 2.51,
        },
        {
          id: 9,
          tag: "",
          image:
            "https://images.squarespace-cdn.com/content/v1/6639cb5334623d0716cb7e75/1719420287023-V1CTC7LETS463CB1WLET/authentic-beer-battered-fish-and-chips-homemade-tartar-sauce-jersey-joes-san-carlos-san-jose.png?format=1000w",
          category: "Hodo Foods",
          name: "Gorton’s Beer Battered Fish Fillets with soft paper",
          rate: "4.0",
          description: "500 gram",
          sellPrice: "2.80",
          discountPrice: 2.51,
        },
        {
          id: 10,
          tag: "Hot",
          tagColor: "#FD6E6E",
          image:
            "https://static.vecteezy.com/system/resources/previews/035/930/075/non_2x/ai-generated-caramel-praline-crunch-ice-cream-on-transparent-background-ai-png.png",
          category: "Hodo Foods",
          name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
          rate: "4.0",
          description: "500 gram",
          sellPrice: "2.80",
          discountPrice: 2.51,
        },
      ],
    };
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
  justify-content: center;
}

/* Categories Section */
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5%;
  margin: 1%;
  width: 1480px;
}

/* Promotions Section */
.promotion {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1%;
  width: 1480px;
}
</style>
