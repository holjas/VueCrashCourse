app.component("art-details", {
  props: {
    details: Array,
  },
  template:
    /*html*/
    `
    <div class="card m-3" style="width: 18rem" v-for="detail in details">
    <img :src="detail.urls.regular" class="card-img-top" :alt="detail.alt_description" />
    <div class="card-body">
       <h5 class="card-title" >{{detail.alt_description}}</h5>
      <p class="card-text">
        Artist: {{detail.user.name}}
      </p>
      
      <p class="card-text">
      <a :href="detail.user.portfolio_url" target="_blank">Portfolio</a>
      </p>


    </div>
  </div>
    `,
  methods: {},
});
