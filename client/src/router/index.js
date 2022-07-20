import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import LoginPage from "../views/LoginPage.vue";
import BuildPage from "../views/BuildPage.vue";
import MyOrderPage from "../views/MyOrderPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/login",
      name: "loginpage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "registerpage",
      component: RegisterPage,
    },
    {
      path: "/build",
      name: "buildpage",
      component: BuildPage,
    },
    {
      path: "/myorder",
      name: "myorderpage",
      component: MyOrderPage,
    },
    {
      path: "/checkout",
      name: "checkoutpage",
      component: CheckoutPage,
    },
  ],
});

export default router;
