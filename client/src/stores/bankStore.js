import { defineStore } from "pinia";
import axios from "axios";

export const useBankStore = defineStore({
  id: "bankState",
  state: () => ({
    isLogin: false,
    // baseUrl: "https://rakitin.herokuapp.com",
    baseUrl: "http://localhost:3000",
    product: [],
    vga: [],
    psu: [],
    ssd: [],
    ram: [],
    processor: [],
    myOrderList: [],
    showcase: [],
    myOrderSingle: [],
    provinc: [],
    city: [],
    shippingCost: [],
    shippingDay: [],
    isCalculateShippingCost: false,
  }),
  getters: {},
  actions: {
    async fetchProduct() {
      try {
        const response = await axios.get(this.baseUrl + "/product");
        this.product = response.data;
        this.vga = response.data.VGA;
        this.psu = response.data.PSU;
        this.ram = response.data.RAM;
        this.ssd = response.data.SSD;
        this.processor = response.data.Processors;
      } catch (error) {
        console.log(error);
      }
    },

    async registerHandler(credential) {
      try {
        const response = await axios.post(this.baseUrl + "/register", {
          email: credential.email,
          password: credential.password,
        });

        swal("Good job!", "Register Succesfull!", "success");
        this.fetchProduct();
        this.router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },

    async loginHandler(credential) {
      try {
        const response = await axios.post(this.baseUrl + "/login", {
          email: credential.email,
          password: credential.password,
        });
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("id", response.data.id);
        this.isLogin = true;
        this.fetchProduct();
        this.myOrder();
        swal("Good job!", "You successfully login!", "success");
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },

    async addOrder(specification) {
      try {
        const response = await axios.post(
          this.baseUrl + "/myorder",
          {
            UserId: localStorage.getItem("id"),
            VgaId: specification.VgaId,
            PsuId: specification.PsuId,
            ProcessorId: specification.ProcessorId,
            SsdId: specification.SsdId,
            RamId: specification.RamId,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        swal("Good job!", "You successfully add order!", "success");
        this.router.push("/myorder");
        this.myOrder();
      } catch (error) {
        console.log(error);
      }
    },

    async myOrder() {
      try {
        const id = localStorage.getItem("id");
        const response = await axios.get(this.baseUrl + "/myorder", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.myOrderList = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async myOrderById(id) {
      try {
        const response = await axios.get(this.baseUrl + `/myorder/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.myOrderSingle = response.data;
        this.router.push("/checkout");
        this.fetchProduct();
      } catch (error) {
        console.log(error);
      }
    },

    async getShowcase() {
      try {
        const response = await axios.get(this.baseUrl + "/showcase");

        this.showcase = response.data.showcase;
      } catch (error) {
        console.log(error);
      }
    },

    async changeStatus(id, status) {
      this.router.push("/myorder");
      swal("Good job!", "Thanks for confirming, enjoy your PC!", "success");
      this.myOrder();
      try {
        const response = await axios.patch(
          this.baseUrl + `/myorder/status/${id}`,
          {
            status: status,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        // this.router.push("/myorder");
        // this.myOrder();
      } catch (error) {
        console.log(error);
      }
    },

    async deleteMyOrder(id) {
      this.router.push("/myorder");
      this.myOrder();

      swal("Good job!", "You successfully delete unused build!", "success");
      try {
        const response = await axios.delete(this.baseUrl + `/myorder/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log("sss", response);
        console.log("berhasil delete kebawah", id);
        this.router.push("/myorder");
        this.myOrder();
      } catch (error) {
        console.log(error);
        console.log("asdasd");
      }
    },

    // deleteMyOrder(id) {
    //   console.log(id);
    //   axios({
    //     url: this.baseUrl + `/myorder/${id}`,
    //     method: "delete",
    //     headers: {
    //       access_token: localStorage.getItem("access_token"),
    //     },
    //   })
    //     .then((res) => {
    //       console.log(res);
    //       console.log("berhasil");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },

    async getCity() {
      try {
        const response = await axios.get(this.baseUrl + "/shipping/city", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.city = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getProvince() {
      try {
        const response = await axios.get(this.baseUrl + "/shipping/province", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.province = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getCost(shipping) {
      try {
        const response = await axios.post(
          this.baseUrl + "/shipping/cost",
          {
            origin: 151,
            destination: Number(shipping.destination),
            weight: shipping.weight,
            courier: shipping.courier,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.shippingCost = response.data.data.shipping[0].cost[0].value;
        this.shippingDay = response.data.data.shipping[0].cost[0].etd;
        this.isCalculateShippingCost = true;
        swal(
          "Total Shipping Cost",
          `${
            this.shippingCost
              .toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })
              .split(",")[0]
          }`,
          "success"
        );
      } catch (error) {
        swal("Noo!", "Sorry we cant reach this city, try another...", "error");
        console.log(error);
      }
    },

    async paymentHandler(price, id) {
      try {
        const response = await axios.post(
          this.baseUrl + "/payment",
          { price },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        var yuk = this;
        window.snap.pay(response.data.token, {
          onSuccess(result) {
            yuk.changeStatus(id, "Shipment");
            yuk.myOrder();
            yuk.router.push("/myorder");
            swal(
              "Gotchaaaa!",
              "We will deliver your PC shortly, the status should be 'Shipment' now",
              "success"
            );
          },
          onPending(result) {
            yuk.router.push("/myorder");
            swal(
              "Noo!",
              "You cancel payment, please proceed again later..",
              "error"
            );
            yuk.isCalculateShippingCost = false;
            yuk.myOrder();
          },
          onError(result) {
            yuk.router.push("/");
            console.log("onError");
          },
          onClose(result) {
            swal(
              "Noo!",
              "You cancel payment, please proceed again later..",
              "error"
            );
            yuk.router.push("/myorder");
          },
        });
      } catch (error) {
        console.log(error);
      }
    },

    logoutHandler() {
      this.isLogin = false;
      localStorage.clear();
      this.router.push("/login");
    },

    saveLoginState() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
        this.fetchProduct();
        this.myOrder();
        this.getShowcase();
      }
    },
  },
});
