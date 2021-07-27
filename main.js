const app = Vue.createApp({
  data() {
    return {
      details: [],
      searchTerm: "",
    };
  },
  mounted() {
    this.fetchCatalogue("city");
    //   https://unsplash.com/documentation#search-photos //API DOCS
    // const url = new URL("https://api.unsplash.com/search/photos/");
    // url.search = new URLSearchParams({
    //   client_id: "OuD9fBBhhqUwYF8d6yVIT8yFdIR3AQk9MtF_bC7Fjws",
    //   orientation: "squarish",
    //   per_page: 50,
    //   query: this.searchTerm,
    // });
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => (this.details = data.results));
    // fetch("./response.json")
    //   .then((res) => res.json())
    //   .then((data) => (this.details = data.results));
  },
  methods: {
    fetchCatalogue(imageSearch) {
      const url = new URL("https://api.unsplash.com/search/photos/");
      url.search = new URLSearchParams({
        client_id: "OuD9fBBhhqUwYF8d6yVIT8yFdIR3AQk9MtF_bC7Fjws",
        orientation: "squarish",
        per_page: 20,
        query: imageSearch,
      });
      fetch(url)
        .then((response) => response.json())
        .then((data) => (this.details = data.results));
    },
    onSubmit() {
      this.fetchCatalogue(this.searchTerm);
    },
  },
});
