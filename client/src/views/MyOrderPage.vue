<script>
import { useBankStore } from "../stores/bankStore";
import { mapState, mapActions } from "pinia";
export default {
  name: "MyOrderPage",
  computed: {
    ...mapState(useBankStore, ["myOrderList"]),
  },
  methods: {
    ...mapActions(useBankStore, [
      "myOrderById",
      "deleteMyOrder",
      "changeStatus",
      "myOrder",
      // "changeStatus",
    ]),
    localCheckoutHandler(id) {
      this.myOrderById(id);
    },
    localDeleteHandler(id) {
      this.deleteMyOrder(id);
      this.myOrder();
    },
    confirmHandler(id) {
      this.changeStatus(id, "Delivered");
    },
  },
};
</script>

<template>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption
        class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800"
      >
        My Order List
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          This is your order list, please kindly read below instruction for
          further information. Our team will assist if customer find another
          trouble in order process. Just email us at
          customer.care@rakitin-pc.web.app
        </p>
        <p class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
          - Unpaid : order is not yet paid and can be remove once it being
          unused by customer
        </p>
        <p class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
          - Shipment : order is on its way by couries, its up to 8 days. please
          kindly wait
        </p>
        <p class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
          - Delivered : PC already on you place, unbox and go play with it
        </p>
      </caption>
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center"
      >
        <tr>
          <th scope="col" class="py-3 px-6">Order Id</th>
          <th scope="col" class="py-3 px-6">Vga</th>
          <th scope="col" class="py-3 px-6">Processor</th>
          <th scope="col" class="py-3 px-6">Psu</th>
          <th scope="col" class="py-3 px-6">Ram</th>
          <th scope="col" class="py-3 px-6">Ssd</th>
          <th scope="col" class="py-3 px-6">Power</th>
          <th scope="col" class="py-3 px-6">Estimated Price</th>
          <th scope="col" class="py-3 px-6">Status</th>
          <th scope="col" class="py-3 px-6">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="el in myOrderList"
        >
          <th
            scope="row"
            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            # 2022-07-{{ el.id }}
          </th>
          <td
            v-if="el.Vga"
            class="py-4 px-6 text-xs text-black text-center dark:text-white"
          >
            {{ el.Vga.name }}
          </td>
          <td
            v-else
            class="py-4 px-6 text-xs italic text-center dark:text-white"
          >
            not yet choose
          </td>
          <td
            v-if="el.Processor"
            class="py-4 px-6 text-xs text-black text-center dark:text-white"
          >
            {{ el.Processor.name }}
          </td>
          <td
            v-else
            class="py-4 px-6 text-xs italic text-center dark:text-white"
          >
            not yet choose
          </td>
          <td
            v-if="el.Psu"
            class="py-4 px-6 text-xs text-black text-center dark:text-white"
          >
            {{ el.Psu.name }}
          </td>
          <td
            v-else
            class="py-4 px-6 text-xs italic text-center dark:text-white"
          >
            not yet choose
          </td>
          <td
            v-if="el.Ram"
            class="py-4 px-6 text-xs text-black text-center dark:text-white"
          >
            {{ el.Ram.name }}
          </td>
          <td
            v-else
            class="py-4 px-6 text-xs italic text-center dark:text-white"
          >
            not yet choose
          </td>
          <td
            v-if="el.Ssd"
            class="py-4 px-6 text-xs text-black text-center dark:text-white"
          >
            {{ el.Ssd.name }}
          </td>
          <td
            v-else
            class="py-4 px-6 text-xs italic text-center dark:text-white"
          >
            not yet choose
          </td>
          <td
            v-if="el.Vga && el.Ram && el.Processor && el.Ssd && el.Psu"
            class="py-4 px-6 text-xs text-black text-center dark:text-white"
          >
            {{
              (el.Vga.power +
                el.Ram.power +
                el.Processor.power +
                el.Psu.power +
                el.Ssd.power) /
              5
            }}
          </td>
          <td
            v-else
            class="py-4 px-6 text-xs italic text-center dark:text-white"
          >
            -
          </td>
          <td
            v-if="el.Vga && el.Ram && el.Processor && el.Ssd && el.Psu"
            class="py-4 px-6 text-xs text-black text-xs text-center dark:text-white"
          >
            {{
              (
                el.Vga.price +
                el.Ram.price +
                el.Processor.price +
                el.Psu.price +
                el.Ssd.price
              )
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .split(",")[0]
            }}
          </td>
          <td
            v-else
            class="py-4 px-6 py-4 px-6 text-xs italic text-center dark:text-white"
          >
            -
          </td>
          <td
            v-if="el.status === 'Unpaid'"
            class="py-4 px-6 text-xs text-red-700 text-center dark:text-white"
          >
            {{ el.status }}
          </td>
          <td
            v-if="el.status === 'Shipment'"
            class="py-4 px-6 text-xs text-purple-700 text-center dark:text-white"
          >
            {{ el.status }}
          </td>
          <td
            v-if="el.status === 'Delivered'"
            class="py-4 px-6 text-xs text-green-700 text-center dark:text-white"
          >
            {{ el.status }}
          </td>

          <td
            v-if="
              el.Vga &&
              el.Ram &&
              el.Processor &&
              el.Ssd &&
              el.Psu &&
              el.status !== 'Shipment' &&
              (el.status !== 'Delivered') & 7
            "
            class="py-4 px-6 text-center"
          >
            <div>
              <a
                @click.prevent="myOrderById(el.id)"
                href="#"
                class="font-medium text-blue-600 dark:text-yellow-500 hover:underline dark:text-white"
                >Pay</a
              >
            </div>
            <div>
              <a
                @click.prevent="localDeleteHandler(el.id)"
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline dark:text-white"
                >Remove</a
              >
            </div>
          </td>
          <td
            v-else-if="el.status === 'Shipment'"
            class="py-4 px-6 text-center"
          >
            <div>
              <a
                @click.prevent="confirmHandler(el.id)"
                href="#"
                class="font-medium text-blue-600 dark:text-yellow-500 hover:underline dark:text-white"
                >Confirm</a
              >
            </div>
          </td>
          <td
            v-else-if="el.status === 'Delivered'"
            class="py-4 px-6 text-center"
          >
            <i class="fa-solid fa-check"></i>
          </td>
          <td v-else class="py-4 px-6 text-center">
            <div>
              <a
                @click.prevent="localDeleteHandler(el.id)"
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline dark:text-white"
                >Delete</a
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="myOrderList.length < 1">
      <h3 class="text-4xl text-center font-mono py-8">
        You didnt have any build yet !
        <RouterLink
          to="/build"
          class="no-underline text-sky-700 underline hover:underline hover:bg-sky-700 hover:text-white decoration-white"
          >build now.</RouterLink
        >
      </h3>
    </div>
    <div v-else>
      <RouterLink
        href="#"
        to="/build"
        class="flex font-semibold text-orange-600 text-sm my-8 mx-8"
      >
        <svg
          class="fill-current mr-2 text-orange-600 w-4"
          viewBox="0 0 448 512"
        >
          <path
            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
          />
        </svg>
        Build Another PC
      </RouterLink>
    </div>
  </div>
</template>

<style></style>
