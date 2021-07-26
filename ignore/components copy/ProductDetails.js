app.component("product-details", {
  props: {
    details: String,
  },
  template:
    /*html*/
    `
    <h4>I am product details {{details}}</h4>
    
    `,
  data() {
    return {};
  },
});
