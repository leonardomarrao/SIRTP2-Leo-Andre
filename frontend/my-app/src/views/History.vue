<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <NavbarUtilizador></NavbarUtilizador>
    </header>
    <body>
      <br />
      <div class="centrar" v-for="produto of listaCompras" :key="produto.id">
        <CompraBarra v-bind:produto="produto"></CompraBarra>
      </div>
      <br />
    </body>
  </div>
</template>

<script>
import CompraBarra from "../components/CompraBarra.vue";
import TopNavbar from "../components/TopNavbar.vue";
import NavbarUtilizador from "../components/NavbarUtilizador.vue";
import axios from "axios";

export default {
  name: "History",
  components: {
    TopNavbar,
    CompraBarra,
    NavbarUtilizador,
  },
  data() {
    return {
      listaCompras: [],
      id: localStorage.getItem('id')
    };
  },
  mounted() {
    this.getHistory();
  },
  methods: {
    getHistory() {
      axios({
        method: "get",
        url: `http://localhost:3000/compraDetailsFromCliente/` + this.id,
      }).then((response) => {
        this.listaCompras = response.data;
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
