<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <NavbarUtilizador ></NavbarUtilizador>
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
import NavbarUtilizador from "../components/NavbarUtilizador.vue";
import axios from "axios";

export default {
  name: "Favorits",
  components: {
    TopNavbar,
    FavoritoBarra,
    NavbarUtilizador,
  },
  data() {
    return {
      favorito: [],
      id: localStorage.getItem('id')
    };
  },
  mounted() {
    this.getFavorits();
  },
  methods: {
    getFavorits() {
      axios({
        method: "get",
        url: `http://localhost:3000/favorito/cliente/` + this.id,
      }).then((response) => {
        this.favorito = response.data;
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
