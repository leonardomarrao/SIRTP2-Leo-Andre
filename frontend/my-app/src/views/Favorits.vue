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
      favorito: [],
      prodFav: []
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
        console.log(this.favorito + "favorito");
      })
      for (var favoritos of this.favorito) {
        axios({
        method: "get",
        url: `http://localhost:3000/produto/id/` + favoritos.idpro,
      }).then((response) => {
        this.prodFav = response.data;
        console.log(this.prodFav + "prodFavkkkk");
      })
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cartoes {

  float:left;

}

body {
  font-family: "montserrat", sans-serif;
}

.bottom {
  width: 100vw;
  background-color: rgb(156, 156, 156);
}

.top {
  background-color: rgb(82, 82, 82);
  width: 100vw;
}


</style>

