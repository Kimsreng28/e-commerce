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
  display: inline-block;
  transition: background-color 0.3s, ease-out 0.4s;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  box-shadow: inset 0 0 0 0 #07c5eb;
}

.load-more button:hover {
  box-shadow: inset 0 0px 0 50px #07c5eb;
}
</style>
