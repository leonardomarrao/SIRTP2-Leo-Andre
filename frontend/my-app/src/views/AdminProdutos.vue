<template>
    <div>
        <header>
        <TopNavbar class="top"></TopNavbar>
        </header>
        <h1 class="h1AdminProdutos">PRODUTOS</h1>
        <body>
            <br />
            <div class="centrar" v-for="produto of lista" :key="produto.id">
                <ProdutoBarra v-bind:produto="produto"></ProdutoBarra>
            </div>
            <br />
        </body>
    </div>
</template>

<script>
import ProdutoBarra from "../components/ProdutoBarra.vue";
import TopNavbar from "../components/TopNavbar.vue";
import axios from "axios";

export default {
  name: "AdminProdutos",
  components: {
    ProdutoBarra,
    TopNavbar
  },
  data() {
    return {
      lista: [],
      id: localStorage.getItem('id')
    };
  },
  mounted() {
    this.getProdutos();
  },
  methods: {
    getProdutos() {
      axios({
        method: "get",
        url: `http://localhost:3000/produto`,
      }).then((response) => {
        this.lista = response.data;
      });
    },
  },
};
</script>

<style>
    .h1AdminProdutos {
        font-size: 40px;
    }
</style>