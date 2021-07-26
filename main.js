const app = Vue.createApp({
  data() {
    return {
      details: [],
    };
  },
  created() {
    const url = new URL("https://api.unsplash.com/search/photos/");
    url.search = new URLSearchParams({
      client_id: "OuD9fBBhhqUwYF8d6yVIT8yFdIR3AQk9MtF_bC7Fjws",
      orientation: "squarish",
      query: "painting",
    });
    fetch(url)
      .then((response) => response.json())
      .then((data) => (this.details = data.results));
  },

  methods: {},
});
