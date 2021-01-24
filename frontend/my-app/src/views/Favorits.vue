<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
    </header>
    <body>
      <div class="centrar"> 
        <FavoritoBarra v-bind:produto="produto"
      ></FavoritoBarra>
      </div>
    
    </body>
  </div>
</template>

<script>
import FavoritoBarra from "../components/FavoritoBarra.vue";
import TopNavbar from "../components/TopNavbar.vue";
import axios from "axios";

export default {
  name: "Favoritos",
  components: {
    TopNavbar,
    FavoritoBarra,
  },
  data() {
    return {
      favorito: []
    }
  },
  mounted() {
    this.getFavorits();
  },
  methods: {
    getFavorits() {
      var id = this.$route.params.id; //precisamos passar aqui o id do cliente
      
      axios({
        method: "get",
        url: `http://localhost:3000/favorito/cliente/` + 2,
      }).then((response) => {
        this.favorito = response.data;
        console.log(this.favorito);
      })
    }
  }
}