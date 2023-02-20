<script>
import { useBankStore } from "../stores/bankStore";
import { mapActions, mapState } from "pinia";

export default {
  name: ["VgaCard"],
  props: ["vga"],
};
</script>

<template>
  <div
    class="w-56 h-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800"
  >
    <RouterLink to="/build">
      <img class="p-8 rounded-t-lg" :src="vga.imageUrl" alt="product image" />
    </RouterLink>
    <div class="px-5 pb-5">
      <RouterLink to="/build">
        <h5
          class="text-xs font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ vga.name }}
        </h5>
      </RouterLink>
      <div class="flex items-end mt-2.5 mb-5 justify-center">
        <!-- <h5
          class="text-xs font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          Power
        </h5> -->

        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
          >Power {{ vga.power }}</span
        >
      </div>
      <div class="flex items-end mt-2.5 mb-5 justify-center">
        <!-- <h5
          class="text-xs font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          Type
        </h5> -->

        <span
          class="bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
          >VGA Card
        </span>
      </div>

      <div class="flex justify-between items-center">
        <span class="text-1xl font-bold text-gray-900 dark:text-white px-8">{{
          vga.price
            .toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })
            .split(",")[0]
        }}</span>
        <!-- <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Add to cart</a
              > -->
      </div>
    </div>
  </div>
</template>

<script></script>
