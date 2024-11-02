<template>
  <div class="load-more">
    <button @click="$emit('load-more')">+ &nbsp; Load More</button>
  </div>
</template>

<script>
export default {
  name: "LoadMoreButton",
};
</script>

<style scoped>
.load-more {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
}

.load-more button {
  width: 160px;
  height: 48px;
  background-color: #4ee77c;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  font-family: Quicksand, sans-serif;
  color: #504242;
  cursor: pointer;
  box-shadow: 0 8px 7px rgba(41, 42, 39, 0.1);
  transition: background-color 0.3s;
}

.load-more button:hover {
  filter: brightness(80%);
}
</style>
