<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
    </header>
    <body>
      <div class="centrar"> 
        <FavoritoBarra v-bind:favorito="favorito"/>
      </div>
    
    </body>
  </div>
</template>

<script>

import TopNavbar from "../components/TopNavbar.vue";
import FavoritoBarra from "../components/FavoritoBarra.vue";
import axios from "axios";
export default {
  name: "InfoProduct",
  components: {
    
    TopNavbar,
    FavoritoBarra,
  },
  data() {
    return {
      favorito: {}
    }
  },
  mounted() {
    this.getFavorits();
  },
  methods: {
    getFavorits() {
      var id = this.$route.params.id;
      
      axios({
        method: "get",
        url: `http://localhost:3000/favorito/cliente/:idcli` + 2,
      }).then((response) => {
        this.favorito = response.data;
        console.log(this.favorito);
      })
    }
  }
}