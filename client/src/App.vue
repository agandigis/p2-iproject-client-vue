<script>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { useBankStore } from "./stores/bankStore";
import { mapState, mapActions } from "pinia";

export default {
  components: {
    NavBar,
    RouterView,
  },
  methods: {
    ...mapActions(useBankStore, ["saveLoginState"]),
  },
  created() {
    this.saveLoginState();
  },
};
</script>

<template>
  <NavBar />

  <RouterView />
</template>

<style></style>
