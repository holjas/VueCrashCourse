const app = Vue.createApp({
  data() {
    return {
      details: [],
      searchTerm: "",
    };
  },
  mounted() {
    this.fetchCatalogue("city");
  },
  //   LOCAL DATA START -------------------------
  //   mounted() {
  //     fetch("./response.json")
  //       .then((res) => res.json())
  //       .then((data) => (this.details = data.results));
  //   },
  //   LOCAL DATA END -------------------------
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
    addSearchTerm(term) {
      this.fetchCatalogue(term);
    },
  },
});
