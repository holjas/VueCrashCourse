app.component("search-bar", {
  data() {
    return { searchTerm: "" };
  },
  template:
    /*html*/
    `
    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <form class="d-flex" @submit.prevent="onSubmit">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchTerm"
        />
        <button class="btn btn-outline-primary" type="submit" >
          Search
        </button>
      </form>
    </div>
  </nav>
    `,
  methods: {
    onSubmit() {
      this.$emit("add-search-term", this.searchTerm);
    },
  },
});
