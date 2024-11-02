<template>
  <div class="userInformation">
    <div class="container">
      <div class="back" @click="goBack">
        <span class="material-icons"> arrow_back </span>
        <p>Back</p>
      </div>
      <div class="profile">
        <input type="file" @change="onImageUpload" v-if="isEditing" />
        <img :src="profileImageUrl || defaultProfileImage" alt="" />
      </div>

      <div class="button">
        <button v-if="!isEditing" @click="isEditing = true">Edit</button>
        <button v-if="isEditing" @click="saveInformation">Save</button>
      </div>

      <div class="name">
        <input v-if="isEditing" v-model="name" placeholder="Enter your name" />
        <p v-else>{{ name }}</p>
      </div>

      <div class="email">
        <input
          v-if="isEditing"
          v-model="email"
          placeholder="Enter your email"
        />
        <p v-else>{{ email }}</p>
      </div>

      <div class="numberPhone">
        <input
          v-if="isEditing"
          v-model="numberPhone"
          placeholder="Enter your phone number"
        />
        <p v-else>{{ numberPhone || "No phone number provided" }}</p>
      </div>

      <div class="address">
        <input
          v-if="isEditing"
          v-model="address"
          placeholder="Enter your address"
        />
        <p v-else>{{ address || "No address provided" }}</p>
      </div>
      <div class="logOut">
        <button @click="logOut">Log Out</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInformation",
  data() {
    return {
      name: localStorage.getItem("userName") || "No Name",
      email: localStorage.getItem("userEmail") || "No Email",
      numberPhone: localStorage.getItem("userNumberPhone") || "",
      address: localStorage.getItem("userAddress") || "",
      profileImageUrl: localStorage.getItem("userProfileImage") || "",
      defaultProfileImage: "@/assets/images/programmer.png",
      isEditing: false,
    };
  },
  methods: {
    onImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImageUrl = e.target.result;
          this.$emit("updateProfileImage", this.profileImageUrl);
        };
        reader.readAsDataURL(file);
      }
    },
    saveInformation() {
      // Save information to localStorage
      localStorage.setItem("userName", this.name);
      localStorage.setItem("userEmail", this.email);
      localStorage.setItem("userNumberPhone", this.numberPhone);
      localStorage.setItem("userAddress", this.address);

      if (this.profileImageUrl) {
        localStorage.setItem("userProfileImage", this.profileImageUrl);
      }

      this.isEditing = false;
      alert("Information saved successfully!");

      // Redirect back to the home page
      this.$router.push({ name: "home" });
    },
    logOut() {
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userNumberPhone");
      localStorage.removeItem("userAddress");
      localStorage.removeItem("userProfileImage");
      this.$router.push({ path: "/" });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.userInformation {
  width: 100%;
  max-width: 1480px;
  height: 1100px;
  display: flex;
  margin-left: -5%;
  margin-top: 2%;
  align-items: center;
  flex-direction: column;
}
.container {
  width: 1400px;
  height: 800px;
  background-color: rgb(78, 70, 70);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 10px;
}

.back {
  width: 80%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3%;
  cursor: pointer;
  color: #ffffff;
}
.back p {
  margin-left: 3%;
  font-size: 18px;
  font-weight: bold;
  font-family: Quicksand, sans-serif;
}
.profile {
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
}
.profile img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #1877f2;
}
.button {
  margin-top: 3%;
}
.button button {
  width: 80px;
  height: 30px;
  background-color: #1877f2;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: bold;
  font-family: Quicksand, sans-serif;
}
.button button:hover {
  background-color: #0d64d5;
}
.name,
.email,
.numberPhone,
.address {
  width: 80%;
  height: 40px;
  background-color: #ffffff;
  padding: 2%;
  border-radius: 10px;
  box-shadow: 0 7px 5px rgba(225, 202, 202, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3%;
  font-size: 16px;
  font-weight: bold;
  font-family: Quicksand, sans-serif;
}

.name input,
.email input,
.numberPhone input,
.address input {
  color: #716868;
  border: none;
  outline: none;
}
.logOut {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
}
.logOut button {
  width: 80px;
  height: 30px;
  background-color: #d61111;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: bold;
  font-family: Quicksand, sans-serif;
}
.logOut button:hover {
  background-color: #ff0000;
}
</style>
