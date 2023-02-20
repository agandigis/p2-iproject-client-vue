<script>
import { useBankStore } from "../stores/bankStore";
import { mapState, mapActions } from "pinia";
import ShowcaseCard from "../components/ShowcaseCard.vue";
export default {
  name: "ShowcasePage",
  components: {
    ShowcaseCard,
  },
  computed: {
    ...mapState(useBankStore, ["showcase"]),
  },
};
</script>

<template>
  <div class="flex flex-row flex-wrap px-8 py-8 justify-evenly">
    <ShowcaseCard v-for="showcase in showcase" :showcase="showcase" />
  </div>
</template>

<script></script>
