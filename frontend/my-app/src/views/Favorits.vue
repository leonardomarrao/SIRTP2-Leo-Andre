<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
    </header>
    <body>
      <br />
      <div class="centrar" v-for="produto of favorito" :key="produto.id">
        <FavoritoBarra v-bind:produto="produto"></FavoritoBarra>
      </div>
      <br />
    </body>
  </div>
</template>

<script>
import FavoritoBarra from "../components/FavoritoBarra.vue";
import TopNavbar from "../components/TopNavbar.vue";
import axios from "axios";

export default {
  name: "Favorits",
  components: {
    TopNavbar,
    FavoritoBarra,
  },
  data() {
    return {
      favorito: [],
      listaFavoritos: [],
    };
  },
  mounted() {
    this.getFavorits();
  },
  methods: {
    getFavorits() {
      var id = this.$route.params.id; //precisamos passar aqui o id do cliente
      var idcli = 1;
      axios({
        method: "get",
        url: `http://localhost:3000/favorito/cliente/` + idcli,
      }).then((response) => {
        this.listaFavoritos = response.data;
        var indice = this.listaFavoritos.length;

        while (indice != 0) {
          this.favorito.push(this.listaFavoritos[indice - 1][0]);
          indice = indice - 1;
        }

        console.log(this.favorito);
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.cartoes {
  float: left;
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
