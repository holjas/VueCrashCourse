const app = Vue.createApp({
  data() {
    return {
      details: [],
    };
  },
  created() {
    fetch("./response.json")
      .then((res) => res.json())
      //   .then((res) => console.log(res.results))
      .then((data) => (this.details = data.results));

    console.log(this.details);
  },

  methods: {},
});
