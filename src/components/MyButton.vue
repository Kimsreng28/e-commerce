<template>
  <div
    class="custom-button"
    :class="{ 'add-button': count === 0, 'normal-button': count > 0 }"
    @click="count === 0 ? increment() : null"
  >
    <div class="button-text">
      <span class="add-text">{{ count === 0 ? "Add" : count }}</span>
      <span class="plus-text" v-if="count === 0">+</span>
    </div>
    <div class="icon">
      <i class="increment" v-if="count > 0" @click="increment">🔼</i>
      <i class="decrement" v-if="count > 0" @click="decrement">🔽</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
};
</script>

<style scoped>
.custom-button {
  display: flex;
  width: 80px;
  height: 40px;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border: 1px solid #3bb77e;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #c2e5cb;
}

.add-button {
  background-color: #def9ec;
}

.normal-button {
  background-color: #ffffff;
}

.button-text {
  color: #3bb77e;
  align-items: center;
  display: flex;
  gap: 20px;
  font-family: "Quicksand", serif;
}

.add-text {
  font-weight: bold;
  font-size: 16px;
}

.plus-text {
  font-weight: bold;
  font-size: 20px;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.increment,
.decrement {
  font-size: 10px;
  color: black;
  cursor: pointer;
}

i {
  width: 20px;
}
</style>
