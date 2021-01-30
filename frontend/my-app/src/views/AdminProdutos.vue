<template>
    <div>
        <header>
        <TopNavbar class="top"></TopNavbar>
        </header>
        <h1 class="h1AdminProdutos">PRODUTOS</h1>
        <router-link :to="{path: '/inserirProduto'}" tag="button" class="insertProduto">Inserir Produto</router-link>
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
    margin-top: 20px;
    font-size: 40px;
    color: white;
  }

  .insertProduto {
        width:15%;
        font-size: 25px;
        padding-top: 3px;
        padding-bottom: 3px;
        border-radius: 5px;
        margin-top: 20px;
        margin-bottom: 10px;
        margin-left: 15px;
        margin-right: 15px;
        cursor: pointer;
        background-color: rgb(48, 48, 48);
        color: white;
  }

</style>