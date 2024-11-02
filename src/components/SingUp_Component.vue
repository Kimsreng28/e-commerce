<template>
  <div class="singInCom">
    <div class="text">
      <div class="title">
        <p style="font-weight: 700">Sign Up</p>
      </div>
      <div class="description">
        <p>By signing up, you agree to Awesome Shop’s Terms & Conditions</p>
      </div>
    </div>

    <div class="input">
      <div class="name">
        <input type="text" id="name" v-model="name" placeholder="Name" />
      </div>

      <div class="email">
        <input
          type="email"
          id="email"
          v-model="email"
          :class="{
            'input-error': emailError,
            'border-error': emailError,
          }"
          placeholder="Email"
        />
      </div>
      <div
        style="
          color: #ff0000;
          font-family: Quicksand, sans-serif;
          margin: 2%;
          font-weight: 600;
          font-size: 18px;
        "
        v-if="emailError"
        class="error-message"
      >
        Email is already taken!
      </div>

      <div class="password">
        <input
          type="password"
          id="password"
          v-model="password"
          :class="{
            'input-error': passwordError,
            'border-error': passwordError,
          }"
          placeholder="Password"
        />
      </div>
      <div class="password">
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          :class="{
            'input-error': passwordMatchError,
            'border-error': passwordMatchError,
          }"
          placeholder="Confirm Password"
        />
      </div>
      <div
        style="
          color: #ff0000;
          font-family: Quicksand, sans-serif;
          margin: 2%;
          font-weight: 600;
          font-size: 18px;
        "
        v-if="passwordMatchError"
        class="error-message"
      >
        Passwords do not match!
      </div>
    </div>

    <div class="button">
      <button
        style="
          font-family: Quicksand, sans-serif;
          font-size: 26px;
          font-weight: 700;
        "
        @click="validateCredentials"
      >
        Continue
      </button>
    </div>

    <div class="footer">
      <p style="font-weight: 700; margin-top: 3%">
        Already have an account?
        <router-link to="/" style="text-decoration: none">Sign In</router-link>
      </p>
      <hr style="margin-top: 3%; width: 100px" />
      <p style="font-weight: 700; margin-top: 3%">or continue with</p>
    </div>

    <div class="social">
      <div class="google">
        <button style="background-color: #ffffff; color: dimgray">
          <i class="fa-brands fa-google"></i>Sign In with Google
        </button>
      </div>

      <div class="facebook">
        <button style="background-color: #1877f2; color: white">
          <i class="fa-brands fa-facebook-f"></i>Sign In with Facebook
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp_Component",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      emailError: false,
      passwordError: false,
      passwordMatchError: false,
    };
  },
  methods: {
    validateCredentials() {
      // Reset errors
      this.emailError = false;
      this.passwordError = false;
      this.passwordMatchError = false;

      // Check if email already exists
      if (this.email === "Kim@gmail.com") {
        this.emailError = true;
      }

      // Validate password criteria (add your own criteria if needed)
      if (this.password.length < 6) {
        this.passwordError = true;
      }

      // Check if passwords match
      if (this.password !== this.confirmPassword) {
        this.passwordMatchError = true;
      }

      // If no errors, proceed with signup
      if (!this.emailError && !this.passwordError && !this.passwordMatchError) {
        alert("Sign up successful!");

        // Store the user's email and password in localStorage
        localStorage.setItem("userName", this.name);
        localStorage.setItem("userEmail", this.email);
        localStorage.setItem("userPassword", this.password);

        // Redirect to home or sign-in page after successful signup
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style scoped>
.singInCom {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 985px;
  height: 880px;
  background-color: #b4acac;
  background-image: url(../assets/images/background-login.png);
  background-size: auto;
  background-position: -220% 5%;
  background-blend-mode: luminosity;
  background-repeat: no-repeat;
  box-shadow: 5px 10px 3px rgba(14, 13, 13, 0.1);
  border-radius: 20px;
  flex-direction: column;
  margin-top: 5%;
  position: relative;
  overflow: hidden;
}

.singInCom::after {
  content: "";
  position: absolute;
  background-image: url(../assets/images/background-login.png);
  background-size: auto;
  background-position: left 320% top 700%;
  background-blend-mode: luminosity;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: 0;
  transform: scaleX(1);
}

.singInCom::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
}

.singInCom * {
  position: relative;
  z-index: 2;
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -2%;
}
.title {
  font-family: Quicksand, sans-serif;
  font-size: 32px;
  color: #2aa44f;
}
.description {
  font-family: Quicksand, sans-serif;
  font-size: 20px;
  color: #a49292;
}

.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-top: 5%;
}

.input input {
  margin: 2%;
  width: 520px;
  height: 70px;
  padding: 10px;
  margin-bottom: 15px;
  font-family: Quicksand, sans-serif;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 15px;
  outline: none;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
}

.border-error {
  border-color: red !important;
}

.input-error {
  border-color: red !important;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2%;
}

.button button {
  width: 284px;
  height: 70px;
  padding: 2%;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(22, 205, 132, 1) 11%,
    rgba(65, 144, 18, 1) 100%
  );
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button button:hover {
  filter: brightness(80%);
}

.footer {
  margin-top: 2%;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  color: #272121;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer a {
  color: #2540f0;
  text-decoration: none;
  font-weight: 700;
}

.footer a:hover {
  text-decoration: underline;
}

.social {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  gap: 5%;
}
.social button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
  width: 270px;
  height: 55px;
  font-family: Quicksand, sans-serif;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
}

.social button:hover {
  filter: brightness(80%);
}
</style>
