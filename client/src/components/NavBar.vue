<script>
import { RouterLink } from "vue-router";
import { useBankStore } from "../stores/bankStore";
import { mapActions, mapState } from "pinia";
export default {
  name: "NavBar",
  components: {
    RouterLink,
  },
  methods: {
    ...mapActions(useBankStore, ["logoutHandler"]),
    localLogoutHandler() {
      this.logoutHandler();
    },
  },
  computed: {
    ...mapState(useBankStore, ["isLogin"]),
  },
};
</script>

<template>
  <nav>
    <div class="flex flex-row bg-slate-800 text-slate-50 font-mono">
      <div
        class="basis-1/5 w-full text-center py-8 text-amber-300 font-extrabold"
      >
        <RouterLink to="/">R a k i t i n</RouterLink>
      </div>
      <div class="basis-3/5 w-full flex flex-row py-8">
        <div class="basis-2/5 text-right hover:text-amber-300">
          <RouterLink to="/">Dashboard</RouterLink>
        </div>
        <div class="basis-1/5 text-center hover:text-amber-300">
          <RouterLink to="/showcase">Showcase</RouterLink>
        </div>
        <div v-if="isLogin" class="basis-2/5 text-left hover:text-amber-300">
          <RouterLink to="/myorder" href="">My Order</RouterLink>
        </div>
      </div>

      <div v-if="!isLogin" class="basis-1/5 w-full flex flex-row py-8">
        <div class="basis-1/2 text-right hover:text-amber-300">
          <RouterLink to="/login">Sign In</RouterLink>
        </div>
        <div class="basis-1/2 text-center hover:text-amber-300">
          <RouterLink to="/register">Sign Up</RouterLink>
        </div>
      </div>

      <div v-if="isLogin" class="basis-1/5 w-full flex flex-row py-8">
        <div class="basis-1/2 text-center hover:text-amber-300">
          <RouterLink to="/checkout" href="">Cart</RouterLink>
        </div>
        <div class="basis-1/2 text-left hover:text-amber-300">
          <a @click.prevent="localLogoutHandler" href="">Sign Out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>
