<script>
import { useBankStore } from "../stores/bankStore";
import { mapActions, mapState } from "pinia";
export default {
  name: "BuildPage",
  data() {
    return {
      specification: {
        VgaId: 0,
        PsuId: 0,
        ProcessorId: 0,
        RamId: 0,
        SsdId: 0,
      },
    };
  },
  computed: {
    ...mapState(useBankStore, ["vga", "psu", "processor", "ram", "ssd"]),
  },
  methods: {
    ...mapActions(useBankStore, ["loginHandler", "fetchProduct", "addOrder"]),
    localAddHandler() {
      this.addOrder(this.specification);
    },
  },
  created() {
    this.fetchProduct();
  },
};
</script>

<!-- <option v-for="category in categories" :value="category.id">
            {{ category.name }}
          </option> -->

<template>
  <section class="bg-gray-50 dark:bg-gray-900 px-8 py-8">
    <form @submit.prevent="localAddHandler">
      <div class="py-4 px-8">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Select VGA Card</label
        >
        <select
          v-model="specification.VgaId"
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected="">-</option>
          <option v-for="vga in vga" :value="vga.id">
            {{ vga.name }}
          </option>
        </select>
      </div>
      <div class="py-4 px-8">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Select Power Supply Unit</label
        >
        <select
          v-model="specification.RamId"
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected="">-</option>
          <option v-for="psu in psu" :value="psu.id">
            {{ psu.name }}
          </option>
        </select>
      </div>
      <div class="py-4 px-8">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Select SSD Storage</label
        >
        <select
          v-model="specification.ProcessorId"
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected="">-</option>
          <option v-for="ssd in ssd" :value="ssd.id">
            {{ ssd.name }}
          </option>
        </select>
      </div>
      <div class="py-4 px-8">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Select RAM
        </label>
        <select
          v-model="specification.SsdId"
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected="">-</option>
          <option v-for="ram in ram" :value="ram.id">
            {{ ram.name }}
          </option>
        </select>
      </div>
      <div class="py-4 px-8">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >Select Processor</label
        >
        <select
          v-model="specification.PsuId"
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected="">-</option>
          <option v-for="processor in processor" :value="processor.id">
            {{ processor.name }}
          </option>
        </select>
      </div>
      <br />
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </section>
</template>

<style></style>
