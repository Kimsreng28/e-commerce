<template>
  <div class="commentUser">
    <div class="profile">
      <div class="imageUser">
        <img :src="imageSrc" alt="" />

        <div class="nameUser">
          <p
            style="
              font-weight: 700;
              font-size: 16px;
              font-family: Quicksand, sans-serif;
              color: #1877f2;
            "
          >
            {{ username }}
          </p>

          <p
            style="
              font-weight: 700;
              font-size: 16px;
              font-family: Quicksand, sans-serif;
              color: #716868;
            "
          >
            {{ timestamp }}
          </p>
        </div>

        <div
          class="menu"
          @click="toggleMenu"
          style="cursor: pointer; margin-top: -5%"
        >
          <span class="material-icons"> more_vert </span>
        </div>
      </div>
    </div>

    <div class="commentText">
      <p
        style="
          font-weight: 500;
          font-size: 18px;
          font-family: Quicksand, sans-serif;
          color: #000000;
        "
      >
        {{ text }}
      </p>
    </div>

    <div v-if="menuVisible" class="dropdown-menu">
      <button @click="editComment" class="menu-option">Edit</button>
      <button @click="handleDelete" class="menu-option">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    imageSrc: String,
    username: String,
    timestamp: String,
    text: String,
  },
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    editComment() {
      this.$emit("edit");
      this.menuVisible = false;
    },
    handleDelete() {
      this.$emit("delete");
      this.menuVisible = false;
    },
  },
};
</script>

<style scoped>
.commentUser {
  width: 1078px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: 2%;
  background-color: #d0c6c6;
  border: 1px solid #1a1919;
  border-radius: 10px;
}
.profile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2%;
}
.nameUser {
  width: 250px;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.imageUser {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.imageUser img {
  width: 50px;
  height: 50px;
}

.commentText {
  margin-left: 2%;
}

.dropdown-menu {
  position: absolute;
  background-color: white;
  border: 1px solid #b3aeae;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 100;
  margin-top: 10px;
  left: 50%;
}

.menu-option {
  padding: 10px 20px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  text-align: left;
  width: 100%;
  transition: background-color 0.3s ease;
}

.menu-option:hover {
  background-color: #666262;
}
</style>
