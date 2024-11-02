<template>
  <div class="deliver">
    <div class="arrive">
      <p>Arrive in:</p>
      <p>{{ time }} mins</p>
    </div>

    <div class="address">
      <p>Address:</p>
      <p>{{ address }}</p>
    </div>

    <div class="paid">
      <p>{{ money }}</p>
      <p>Paid From Credit Card</p>
    </div>

    <div class="infoDeliver">
      <div class="profileDelivery">
        <div class="imageProfile">
          <img src="../assets/images/programmer.png" alt="" />
        </div>
        <div class="nameDeliver">
          <p style="color: #2540f0">{{ name }}</p>
          <p style="color: #716868">Delivery for your item(s).</p>
        </div>
      </div>

      <div class="contact">
        <button class="massage">
          <span class="material-icons"> message </span>
        </button>

        <button class="call">
          <span class="material-icons"> call </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { usePaymentStore } from "@/stores/usePaymentStore";
export default {
  name: "Deliver",
  data() {
    return {
      time: 0,
      name: "",
      address: localStorage.getItem("userAddress") || "",
    };
  },
  setup() {
    const paymentStore = usePaymentStore();
    return { paymentStore };
  },
  computed: {
    money() {
      return this.paymentStore.totalAmount || "$0.00";
    },
  },
  mounted() {
    this.time = this.getRandomTime();
    this.name = this.getRandomName();
  },
  methods: {
    getRandomTime() {
      return Math.floor(Math.random() * (60 - 10 + 1)) + 10;
    },
    getRandomName() {
      const names = ["John", "Jane", "Bob", "Alice", "Mike", "Sarah"];
      return names[Math.floor(Math.random() * names.length)];
    },
  },
};
</script>

<style scoped>
.deliver {
  width: 1209px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-top: 10%;
}
.arrive,
.address,
.paid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.arrive p,
.address p,
.paid p {
  font-family: Quicksand, sans-serif;
  color: #cbbfbf;
  font-weight: 700;
  font-size: 18px;
}
.infoDeliver {
  display: flex;
  width: 1209px;
  height: 135px;
  justify-content: space-between;
  align-items: center;
  background-color: #cbbfbf;
  border-radius: 15px;
  border: 1px solid #1a1919;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
  padding: 2%;
}
.profileDelivery {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.imageProfile img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid #1a1919;
}

.nameDeliver p {
  font-family: Quicksand, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #000000;
  line-height: 2;
}

.contact {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.massage {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4ee77c;
  border: none;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
}

.call {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f13e3e;
  border: none;
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.1);
}
</style>
