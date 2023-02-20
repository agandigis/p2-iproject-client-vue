import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import LoginPage from "../views/LoginPage.vue";
import BuildPage from "../views/BuildPage.vue";
import MyOrderPage from "../views/MyOrderPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";
import ShowcasePage from "../views/ShowcasePage.vue";

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
    {
      path: "/showcase",
      name: "showcasepage",
      component: ShowcasePage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token");

  if (to.name === "buildpage" && !isAuthenticated) {
    next({ name: "loginpage" });
  } else {
    next();
  }
});

export default router;
