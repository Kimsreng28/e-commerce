<template>
  <div class="categoryComponent" @click="handleClick">
    <div>
      <img :class="{ selected: isSelected }" :src="image" alt="" />
    </div>
    <div class="titleCate">
      <h4 :style="{ color: isSelected ? '#000000' : '#8B7979' }">
        {{ title }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryComponent",
  props: {
    id: Number,
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.categoryComponent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 20%;
  cursor: pointer;
}

.categoryComponent:hover {
  transform: scale(1.05);
}

img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  transition: filter 0.3s, transform 0.3s;
}

img.selected {
  filter: brightness(1.1);
  transform: scale(1.1);
}

.titleCate {
  display: flex;
  justify-content: start;
  align-items: start;
}
h4 {
  width: 120px;
  font-weight: bold;
  font-size: 20px;
  font-family: "Quicksand", sans-serif;
}
</style>
