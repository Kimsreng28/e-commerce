<template>
  <div class="container">
    <!-- Breadcrumb -->
    <div class="title">
      <p>Home</p>
      <p>></p>
      <p>Vegetables & tubers</p>
      <p>></p>
      <p style="color: #3bb77e">Seeds of Change Organic</p>
    </div>

    <!-- Main product section -->
    <div class="two">
      <!-- Left: Image carousel -->
      <div class="left">
        <div class="main-image">
          <img :src="currentImage" alt="" class="img-big" />
        </div>

        <div class="thumbnail-container">
          <button class="button">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
          <img
            v-for="(image, index) in thumbnails"
            :key="index"
            :src="image"
            @click="changeImage(image)"
            class="thumbnail"
            alt="Thumbnail"
          />
          <button class="button" style="background-color: grey">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
        </div>
      </div>

      <!-- Right: Product details -->
      <div class="right">
        <div class="text">
          <h5>In Stock</h5>
        </div>
        <div class="product-name">
          <h2 style="font-size: 36px; font-weight: 700">{{ product.name }}</h2>
        </div>
        <div class="rating">
          <span
            v-for="i in 5"
            :key="i"
            class="star"
            :class="{ filled: i <= product.rating }"
            >★</span
          >
          <span>({{ product.rating }}.0)</span>
        </div>
        <div class="price-section">
          <span class="current-price">${{ product.currentPrice }}</span>
          <span class="old-price">${{ product.oldPrice }}</span>
        </div>
        <p style="font-family: Lato, sans-serif; margin-top: 5%">
          {{ product.description }}
        </p>

        <div class="add-to-cart-section">
          <MyButton />
          <button class="add-to-cart-button" @click="addToCart">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            Add To Cart
          </button>
          <font-awesome-icon :icon="['fas', 'heart']" />
          <font-awesome-icon :icon="['fas', 'shuffle']" />
        </div>

        <div class="vendor-info">
          <p>
            Vendor: &nbsp; &nbsp; &nbsp;
            <span class="vendor-text">{{ product.vendor }}</span>
          </p>
          <p>
            SKU: &nbsp; &nbsp; &nbsp;
            <span class="vendor-text">{{ product.sku }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="tabs">
      <div class="tab-buttons">
        <button
          class="tab-btn"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: selectedTab === tab }"
          @click="selectedTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Display the content based on the selected tab -->
      <div class="tab-content">
        <div v-if="selectedTab === 'Description'">
          <p>{{ description }}</p>
        </div>
        <div v-if="selectedTab === 'Additional info'">
          <p>{{ additionalInfo }}</p>
        </div>
        <div v-if="selectedTab === 'Reviews (3)'">
          <ul>
            <li v-for="(review, index) in reviews" :key="index">
              {{ review }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import MyButton from "./MyButton.vue";

library.add(fas);
export default {
  name: "ProductDetail",
  components: {
    FontAwesomeIcon,
    MyButton,
  },
  data() {
    return {
      quantity: 1,
      currentImage:
        "https://png.pngtree.com/png-vector/20230322/ourmid/pngtree-mango-realistic-fruit-photo-png-image_6658362.png",
      thumbnails: [
        "https://png.pngtree.com/png-vector/20230322/ourmid/pngtree-mango-realistic-fruit-photo-png-image_6658362.png",
        "https://static.vecteezy.com/system/resources/thumbnails/022/787/331/small/orange-fruit-with-leaves-transparent-background-generative-ai-png.png",
        "https://png.pngtree.com/png-vector/20240708/ourmid/pngtree-spicy-red-chilli-powder-in-bowl-with-super-3d-chilly-a-png-image_13030471.png",
        "https://png.pngtree.com/png-clipart/20231018/original/pngtree-lemons-bowl-still-life-png-image_13342565.png",
        "https://pngimg.com/d/beef_PNG54.png",
      ],
      product: {
        name: "Seeds of Change Organic Quinoa, Brown",
        rating: 4,
        currentPrice: 38,
        oldPrice: 42,
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
        vendor: "NestMart",
        sku: "FWM15VKT",
      },
      selectedTab: "Description",
      tabs: ["Description", "Additional info", "Reviews (3)"],
      description:
        "Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.",
      additionalInfo:
        "Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because. ",
      reviews: [
        "Review 1: Excellent product! Highly recommended.",
        "Review 2: Worth the price, great quality!",
        "Review 3: Delivered on time, satisfied with the purchase.",
      ],
    };
  },
  methods: {
    changeImage(image) {
      this.currentImage = image;
    },
    addToCart() {
      alert(`Added ${this.quantity} item(s) to the cart.`);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 1480px;
}

.title {
  margin: 1%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.5%;
  font-family: "Lato", sans-serif;
  font-size: 14px;
}

.two {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  margin: 1%;
  width: 1480px;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}

.right {
  display: flex;
  flex-direction: column;
  width: 40%;
  border-radius: 10px;
}

.main-image {
  width: 800px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-big {
  margin: 1%;
  width: 580px;
  height: 450px;
  object-fit: contain;
}

.thumbnail-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 5%;
}

.button {
  background-color: #3bb77e;
  border: none;
  color: white;
  border-radius: 20px;
  width: 53.57px;
  height: 40px;
}

.thumbnail {
  width: 90.6px;
  height: 90.6px;
  object-fit: contain;
  cursor: pointer;
  border: 2px solid #3bb77e;
  border-radius: 5px;
}

.thumbnail:hover {
  border-color: #3bb77e;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 20px;
  border-radius: 5px;
  background-color: #def9ec;
  color: #3bb77e;
  font-family: Quicksand, serif;
}
.product-name {
  font-family: Quicksand, serif;
  display: flex;
  justify-content: center;

  margin-bottom: 10px;
  color: #333;
}

.rating {
  display: flex;
  align-items: center;
  gap: 3px;
}

.star {
  color: #ccc;
}

.star.filled {
  color: #f2b01e;
}

.price-section {
  font-family: Quicksand, serif;
  display: inline;
}

.current-price {
  font-size: 60px;
  font-weight: bold;
  color: #3bb77e;
}

.old-price {
  font-size: 30px;
  margin-left: 15%;
  text-decoration: line-through;
  color: #888;
}

.add-to-cart-section {
  display: flex;
  gap: 3%;
  align-items: center;
  margin-top: 5%;
}

.add-to-cart-button {
  background-color: #3bb77e;
  color: white;
  width: 130px;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: Quicksand, serif;
  font-size: 14px;
}

.add-to-cart-button:hover {
  background-color: #2a8e5b;
}

.vendor-info {
  font-family: Lato, sans-serif;
  margin-top: 15%;
  color: #666;
}

.vendor-text {
  color: #b5bab8;
}

.tabs {
  width: 100%;
  max-width: 800px;
  margin: 10%;
}

.tab-buttons {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.tab-btn {
  padding: 10px 20px;
  margin-right: 20px;
  border: none;
  background-color: #f2f3f4;
  border-radius: 20px;
  cursor: pointer;
  color: #b6b6b6;
  font-family: Quicksand, serif;
  font-size: 18px;
  font-weight: 700;
}

.tab-btn.active {
  background-color: #f2f3f4;
  color: #08e67e;
}

.tab-content {
  font-family: Lato, sans-serif;
  width: 1300px;
  padding: 20px;
  color: #7e7e7e;
  border: none;
  border-radius: 10px;
}
</style>
