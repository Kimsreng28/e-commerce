import { defineStore } from "pinia";

export const usePaymentStore = defineStore("payment", {
  state: () => ({
    totalAmount: 0,
  }),
  actions: {
    setTotalAmount(amount) {
      this.totalAmount = amount;
    },
  },
});
