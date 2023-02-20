<script>
import { useBankStore } from "../stores/bankStore";
import { mapActions, mapState } from "pinia";
import VgaCard from "../components/VgaCard.vue";
import PsuCard from "../components/PsuCard.vue";
import ProcessorCard from "../components/ProcessorCard.vue";
import RamCard from "../components/RamCard.vue";
import SsdCard from "../components/SsdCard.vue";
export default {
  name: "HomePage",
  components: {
    VgaCard,
    PsuCard,
    SsdCard,
    RamCard,
    ProcessorCard,
  },
  computed: {
    ...mapState(useBankStore, ["vga", "psu", "ram", "ssd", "processor"]),
  },
  methods: {
    ...mapActions(useBankStore, ["fetchProduct", "myOrder", "getShowcase"]),
  },
  created() {
    this.fetchProduct();
    // this.myOrder();
    this.getShowcase();
  },
};
</script>

<template>
  <!-- DASHBOARD -->
  <div class="flex flex-col bg-gray-50 pl-6">
    <!-- <div class="bg-slate-100 h-44 flex flex-row">
      <div>MARKETPLACE</div>
      <div>GAMBAR GAMBAR PC</div>
      <div>ORDER YOUR PC</div>
    </div> -->
    <div class="flex flex-row mt-8 bg-gray-50">
      <div
        class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg max"
            src="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/26/1db697a8-d400-4104-a597-43ea5a3ef268.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Start build your dream PC, hassle-free !
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. Rakitin, leading in innovation
            and component finder.
          </p>
          <RouterLink
            to="/build"
            href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Build your dream PC
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </RouterLink>
          <img
            class="rounded-t-lg max pt-6"
            src="https://images.tokopedia.net/img/cache/900/VqbcmM/2022/4/26/d21d72ed-c17b-4fab-976b-3aefbf2cbe2a.jpg"
            alt=""
          />
        </div>
      </div>
      <div
        class="basis-3/4 px-4 py-4 flex flex-wrap flex-row gap-4 justify-center bg-gray-50"
      >
        <VgaCard v-for="vga in vga" :vga="vga" />
        <PsuCard v-for="psu in psu" :psu="psu" />
        <ProcessorCard v-for="processor in processor" :processor="processor" />
        <SsdCard v-for="ssd in ssd" :ssd="ssd" />
        <RamCard v-for="ram in ram" :ram="ram" />
      </div>
    </div>
  </div>
</template>

<style></style>
