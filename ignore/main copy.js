const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
      details: "I AM DETAILS, I AM GLOBAL",
    };
  },
  methods: {
    updateCart(id) {
      //   this.cart += 1;
      this.cart.push(id);
    },
    removeCart(id) {
      this.cart.pop();
    },
  },
});
