import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/SignInView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUpView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/userInformation/UserInformation.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/LandingPageView.vue"),
    },
    {
      path: "/productDetails",
      name: "productDetail",
      component: () => import("../views/LandingProductView.vue"),
      props: true,
    },

    {
      path: "/handBags",
      name: "handBag",
      component: () => import("../views/handBags/HandBagPageView.vue"),
    },

    {
      path: "/handBagDetails",
      name: "handBagDetail",
      component: () => import("../views/handBags/HandBagProductView.vue"),
      props: true,
    },

    {
      path: "/electronics",
      name: "electronic",
      component: () => import("../views/electronics/ElectronicPageView.vue"),
    },

    {
      path: "/electronicDetails",
      name: "electronicDetail",
      component: () => import("../views/electronics/ElectronicProductView.vue"),
      props: true,
    },

    {
      path: "/wallets",
      name: "wallet",
      component: () => import("../views/wallets/WalletPageView.vue"),
    },
    {
      path: "/walletDetails",
      name: "walletDetail",
      component: () => import("../views/wallets/WalletProductView.vue"),
      props: true,
    },

    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/CheckOutView.vue"),
    },

    {
      path: "/printReceipts",
      name: "printReceipt",
      component: () => import("../views/ReceiptView.vue"),
    },

    {
      path: "/coupons",
      name: "coupon",
      component: () => import("../views/coupon/CouponView.vue"),
    },
    {
      path: "/delivery",
      name: "delivery",
      component: () => import("../views/delivery/DeliveryView.vue"),
    },
    {
      path: "/gift",
      name: "gift",
      component: () => import("../views/gift/GiftView.vue"),
    },
    {
      path: "/join",
      name: "join",
      component: () => import("../views/join/JoinView.vue"),
    },
  ],
});

export default router;
