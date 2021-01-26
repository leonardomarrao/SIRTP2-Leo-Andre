<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
    </header>
    <body>
      <br />
      <div class="centrar" v-for="produto of compra" :key="produto.id">
        <CompraBarra v-bind:produto="produto"></CompraBarra>
      </div>
      <br />
    </body>
  </div>
</template>

<script>
import CompraBarra from "../components/CompraBarra.vue";
import TopNavbar from "../components/TopNavbar.vue";
import axios from "axios";


export default {
  name: "History",
  components: {
    TopNavbar,
    CompraBarra,
  },
  data() {
    return {
      compra: [],
      listaCompras: [],
    };
  },
  mounted() {
    this.getHistory();
  },
  methods: {
    getHistory() {
      var id = this.$route.params.id; //precisamos passar aqui o id do cliente
      var idcli = 1;
      axios({
        method: "get",
        url: `http://localhost:3000/compra/cliente/` + idcli,
      }).then((response) => {
        this.listaCompras = response.data;
        var indice = this.listaCompras.length;

        while (indice != 0) {
          this.compra.push(this.listaCompras[indice - 1][0]);
          indice = indice - 1;
        }

        console.log(this.compra);
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
