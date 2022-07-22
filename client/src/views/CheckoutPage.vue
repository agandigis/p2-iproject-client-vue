<script>
import { useBankStore } from "../stores/bankStore";
import { mapState, mapActions } from "pinia";

export default {
  name: "CheckoutPage",
  data() {
    return {
      shipping: {
        origin: 151,
        destination: Number(""),
        weight: "",
        courier: "",
      },
    };
  },
  computed: {
    ...mapState(useBankStore, [
      "myOrderSingle",
      "city",
      "shippingCost",
      "shippingDay",
      "isCalculateShippingCost",
    ]),
  },
  methods: {
    ...mapActions(useBankStore, [
      "myOrderById",
      "getCost",
      "paymentHandler",
      "myOrder",
      "getCity",
    ]),
    localGetCost() {
      this.getCost(this.shipping);
    },
    localPaymentHandler(id) {
      let price =
        this.myOrderSingle[0].Vga.price +
        this.myOrderSingle[0].Psu.price +
        this.myOrderSingle[0].Ram.price +
        this.myOrderSingle[0].Processor.price +
        this.myOrderSingle[0].Ssd.price +
        this.shippingCost;

      this.paymentHandler(+price, id);
    },
  },
  created() {
    this.myOrder();
    this.myOrderById();
    this.getCity();
  },
};
</script>

<template>
  <section class="bg-gray-100">
    <div class="container mx-auto mt-10">
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
            <h2 class="font-semibold text-2xl">5 Components</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3
              class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Power
            </h3>
            <h3
              class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Class
            </h3>
            <h3
              class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center"
            >
              Total
            </h3>
          </div>
          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <!-- product -->
              <div class="w-20">
                <img class="h-24" :src="myOrderSingle[0].Vga.imageUrl" alt="" />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{{
                  myOrderSingle[0].Vga.name
                }}</span>
                <span class="text-red-500 text-xs">VGA Card</span>
                <a
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >Graphic</a
                >
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <input
                class="mx-2 border text-center w-8"
                type="text"
                :value="myOrderSingle[0].Vga.power"
              />
            </div>
            <span
              v-if="myOrderSingle[0].Vga.power > 80"
              class="text-center w-1/5 font-semibold text-sm"
              >Great</span
            >
            <span
              v-else-if="myOrderSingle[0].Vga.power > 60"
              class="text-center w-1/5 font-semibold text-sm text-green-500"
              >Decent</span
            >
            <span
              v-else
              class="text-center w-1/5 font-semibold text-sm text-red-500"
              >Bad</span
            >
            <span class="text-center w-1/5 font-semibold text-sm">{{
              myOrderSingle[0].Vga.price
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .split(",")[0]
            }}</span>
          </div>

          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <!-- product -->
              <div class="w-24">
                <img
                  class="h-24"
                  :src="myOrderSingle[0].Processor.imageUrl"
                  alt=""
                />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{{
                  myOrderSingle[0].Processor.name
                }}</span>
                <span class="text-red-500 text-xs">Processor Card</span>
                <a
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >Performance</a
                >
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <input
                class="mx-2 border text-center w-8"
                type="text"
                :value="myOrderSingle[0].Processor.power"
              />
            </div>
            <span
              v-if="myOrderSingle[0].Processor.power > 80"
              class="text-center w-1/5 font-semibold text-sm"
              >Great</span
            >
            <span
              v-else-if="myOrderSingle[0].Processor.power > 60"
              class="text-center w-1/5 font-semibold text-sm text-green-500"
              >Decent</span
            >
            <span
              v-else
              class="text-center w-1/5 font-semibold text-sm text-red-500"
              >Bad</span
            >
            <span class="text-center w-1/5 font-semibold text-sm">{{
              myOrderSingle[0].Processor.price
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .split(",")[0]
            }}</span>
          </div>

          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <!-- product -->
              <div class="w-20">
                <img class="h-24" :src="myOrderSingle[0].Psu.imageUrl" alt="" />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{{
                  myOrderSingle[0].Psu.name
                }}</span>
                <span class="text-red-500 text-xs">Psu Card</span>
                <a
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >Power Unit</a
                >
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <input
                class="mx-2 border text-center w-8"
                type="text"
                :value="myOrderSingle[0].Psu.power"
              />
            </div>
            <span
              v-if="myOrderSingle[0].Psu.power > 80"
              class="text-center w-1/5 font-semibold text-sm"
              >Great</span
            >
            <span
              v-else-if="myOrderSingle[0].Psu.power > 60"
              class="text-center w-1/5 font-semibold text-sm text-green-500"
              >Decent</span
            >
            <span
              v-else
              class="text-center w-1/5 font-semibold text-sm text-red-500"
              >Bad</span
            >
            <span class="text-center w-1/5 font-semibold text-sm">{{
              myOrderSingle[0].Psu.price
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .split(",")[0]
            }}</span>
          </div>

          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <!-- product -->
              <div class="w-20">
                <img class="h-24" :src="myOrderSingle[0].Ram.imageUrl" alt="" />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{{
                  myOrderSingle[0].Ram.name
                }}</span>
                <span class="text-red-500 text-xs">Ram Card</span>
                <a
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >Memory</a
                >
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <input
                class="mx-2 border text-center w-8"
                type="text"
                :value="myOrderSingle[0].Ram.power"
              />
            </div>
            <span
              v-if="myOrderSingle[0].Ram.power > 80"
              class="text-center w-1/5 font-semibold text-sm"
              >Great</span
            >
            <span
              v-else-if="myOrderSingle[0].Ram.power > 60"
              class="text-center w-1/5 font-semibold text-sm text-green-500"
              >Decent</span
            >
            <span
              v-else
              class="text-center w-1/5 font-semibold text-sm text-red-500"
              >Bad</span
            >
            <span class="text-center w-1/5 font-semibold text-sm">{{
              myOrderSingle[0].Ram.price
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .split(",")[0]
            }}</span>
          </div>

          <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
              <!-- product -->
              <div class="w-20">
                <img class="h-24" :src="myOrderSingle[0].Ssd.imageUrl" alt="" />
              </div>
              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{{
                  myOrderSingle[0].Ssd.name
                }}</span>
                <span class="text-red-500 text-xs">Ssd Card</span>
                <a
                  href="#"
                  class="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >Storage</a
                >
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              <input
                class="mx-2 border text-center w-8"
                type="text"
                :value="myOrderSingle[0].Ssd.power"
              />
            </div>
            <span
              v-if="myOrderSingle[0].Ssd.power > 80"
              class="text-center w-1/5 font-semibold text-sm"
              >Great</span
            >
            <span
              v-else-if="myOrderSingle[0].Ssd.power > 60"
              class="text-center w-1/5 font-semibold text-sm text-green-500"
              >Decent</span
            >
            <span
              v-else
              class="text-center w-1/5 font-semibold text-sm text-red-500"
              >Bad</span
            >
            <span class="text-center w-1/5 font-semibold text-sm">{{
              myOrderSingle[0].Ssd.price
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .split(",")[0]
            }}</span>
          </div>

          <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg
              class="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
              />
            </svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Components</span>
            <span class="font-semibold text-sm">{{
              (
                myOrderSingle[0].Vga.price +
                myOrderSingle[0].Psu.price +
                myOrderSingle[0].Ram.price +
                myOrderSingle[0].Processor.price +
                myOrderSingle[0].Ssd.price
              )
                .toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
                .split(",")[0]
            }}</span>
          </div>

          <form @submit.prevent="localGetCost">
            <div>
              <label class="font-medium inline-block mb-3 text-sm uppercase"
                >Shipping</label
              >
              <select
                v-model="shipping.destination"
                class="block p-2 text-gray-600 w-full text-sm"
              >
                <option v-for="city in city" :value="+city.city_id">
                  {{ city.city_name }}
                </option>
              </select>

              <select
                v-model="shipping.weight"
                class="block p-2 text-gray-600 w-full text-sm"
              >
                <option
                  :value="
                    (((myOrderSingle[0].Vga.power +
                      myOrderSingle[0].Psu.power +
                      myOrderSingle[0].Ram.power +
                      myOrderSingle[0].Processor.power +
                      myOrderSingle[0].Ssd.power) /
                      10) *
                      1000) /
                    2
                  "
                >
                  {{
                    (myOrderSingle[0].Vga.power +
                      myOrderSingle[0].Psu.power +
                      myOrderSingle[0].Ram.power +
                      myOrderSingle[0].Processor.power +
                      myOrderSingle[0].Ssd.power) /
                    10 /
                    2
                  }}
                  KG
                </option>
              </select>
              <select
                v-model="shipping.courier"
                class="block p-2 text-gray-600 w-full text-sm"
              >
                <option value="jne">JNE</option>
                <option value="tiki">TIKI</option>
                <option value="pos">POS Indonesia</option>
              </select>
              <button
                class="bg-blue-500 hover:bg-blue-300 px-5 py- text-xs text-white uppercase"
              >
                Calculate Shipping Cost
              </button>
            </div>
          </form>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">SHIPPING COST</span>
            <span v-if="shippingCost > 1" class="font-semibold text-sm">{{
              shippingCost
                .toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
                .split(",")[0]
            }}</span>
            <span v-else class="font-semibold text-sm">-</span>
          </div>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Duration</span>
            <span v-if="shippingDay.length > 0" class="font-semibold text-sm"
              >{{ shippingDay }} Day</span
            >
            <span v-else class="font-semibold text-sm">-</span>
          </div>
          <div class="border-t mt-8">
            <div
              v-if="shippingCost > 1"
              class="flex font-semibold justify-between py-6 text-sm uppercase"
            >
              <span>Total cost</span>

              <span>{{
                (
                  myOrderSingle[0].Vga.price +
                  myOrderSingle[0].Psu.price +
                  myOrderSingle[0].Ram.price +
                  myOrderSingle[0].Processor.price +
                  myOrderSingle[0].Ssd.price +
                  shippingCost
                )
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                  .split(",")[0]
              }}</span>
            </div>
            <div
              v-else
              class="flex font-semibold justify-between py-6 text-sm uppercase"
            >
              <span>Total cost</span>

              <span>{{
                (
                  myOrderSingle[0].Vga.price +
                  myOrderSingle[0].Psu.price +
                  myOrderSingle[0].Ram.price +
                  myOrderSingle[0].Processor.price +
                  myOrderSingle[0].Ssd.price
                )
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                  .split(",")[0]
              }}</span>
            </div>

            <button
              id="pay-button"
              @click.prevent="localPaymentHandler(myOrderSingle[0].id)"
              class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
