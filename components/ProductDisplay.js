app.component("product-display", {
  props: {
    premium: {
      type: Boolean, //prop validation
      required: true,
    },
  },

  template:
    /*html*/
    `
    <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img
          :class="{'out-of-stock-img': !inStockComputed}"
          v-bind:src="imageComputed"
        />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <h3 v-show="onSaleComputed">{{onSaleComputed}}</h3>
        <!-- <p v-show="inStock">in stock</p> -->
        <p v-if="inStockComputed">in stock</p>
        <p v-else>out of stock</p>
        <p>Shipping: {{shippingComputed}} </p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <ul>
          <li v-for="size in sizes">{{size}}</li>
        </ul>
        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{backgroundColor: variant.color}"
        >
          {{variant.color}}
        </div>
        <button
          class="button"
          v-on:click="addToCart"
          :disabled="!inStockComputed"
          :class="{disabledButton: !inStockComputed}"
        >
          Add to Cart
        </button>
        <button
        class="button"
        v-on:click="removeFromCart"
        :disabled="!inStockComputed"
        :class="{disabledButton: !inStockComputed}"
      >
        Remove from Cart
      </button>
      </div>
    </div>
  </div>
    `,
  data() {
    return {
      product: "socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      //   inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
          onSale: true,
        },
        {
          id: 235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
          onSale: false,
        },
      ],
      sizes: ["SMALL", "MEDIUM", "LARGE"],
    };
  },
  methods: {
    addToCart() {
      //   this.cart += 1;
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    imageComputed() {
      return this.variants[this.selectedVariant].image;
    },
    inStockComputed() {
      return this.variants[this.selectedVariant].quantity;
    },
    onSaleComputed() {
      return this.variants[this.selectedVariant].onSale
        ? `${this.brand} ${this.product} in ${
            this.variants[this.selectedVariant].color
          } are on sale`
        : null;
    },
    shippingComputed() {
      return this.premium ? "FREE" : "$2.99";
    },
  },
});
