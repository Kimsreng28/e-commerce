<template>
  <div class="showCase">
    <div class="bg">
      <img class="imageFirst" :src="bgSrcFirst" alt="" />
      <div class="middleText">
        <h1
          style="
            font-weight: 700;
            font-size: 42px;
            font-family: Quicksand, sans-serif;
          "
        >
          Shop Your Designer Dresses
        </h1>
        <p
          style="
            font-weight: 500;
            font-size: 16px;
            font-family: Quicksand, sans-serif;
            color: #5b5454;
          "
        >
          Ready to wear dresses tailored for you from online. Hurry up while
          stock lasts.
        </p>
        <div class="search">
          <span class="material-icons">search</span>
          <input
            type="text"
            placeholder="Search for dresses"
            v-model="searchQuery"
          />
          <button
            @click="onSearch"
            style="font-family: Quicksand, sans-serif; font-weight: 500"
          >
            Search
          </button>
        </div>
      </div>
      <img class="imageSecond" :src="bgSrcSecond" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCaseComponent",
  props: {
    bgSrcFirst: {
      type: String,
      required: true,
    },
    bgSrcSecond: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.searchQuery);
    },
  },
};
</script>

<style scoped>
.showCase {
  display: flex;
  justify-items: center;
  align-items: center;
}
.bg {
  border-radius: 20px;
  margin-left: 2%;
  width: 1480px;
  height: 450px;
  background-color: #c7bcbc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
}

.imageFirst {
  transform: rotate(-10deg);
  margin-left: -2%;
  width: 411px;
  height: 463px;
  object-fit: cover;
  filter: drop-shadow(0 0 0.75rem #57343d);
}

.imageSecond {
  transform: rotate(5deg);
  width: 450px;
  height: 480px;
  margin-bottom: 2%;
  object-fit: cover;
  filter: drop-shadow(5px 8px 5px #f9ea89);
}

.middleText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
}

.search {
  display: inline-flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 3%;
  width: 500px;
  height: 55px;
  border: none;
  border-radius: 20px;
  margin-top: 20%;
  padding: 2%;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
  background-color: #eadada;
}

.search:hover {
  filter: contrast(90%);
}

.search span {
  font-size: 30px;
}

.search input {
  border: none;
  outline: none;
  width: 100%;
  font-family: Quicksand, sans-serif;
  font-size: 18px;
  background-color: #eadada;
}

.search button {
  border: none;
  width: 80px;
  height: 35px;
  background-color: #464b48;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  font-family: Quicksand, sans-serif;
  color: #b4aeae;
  cursor: pointer;
  box-shadow: 0 7px 5px rgba(215, 223, 52, 0.1);
  transition: background-color 0.3s;
}
</style>
