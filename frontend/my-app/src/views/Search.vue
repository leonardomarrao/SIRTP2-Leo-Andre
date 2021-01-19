<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class="bottom"></Navbar>
    </header>
    <body>
      <a class="resetbtn" href="/pesquisa/">{{ $route.params.plataforma }}</a>

      <CartaProduto
        v-for="produto in lista"
        v-bind:key="produto.id"
        v-bind:name="produto.nome"
        v-bind:preco="produto.preco"
        v-bind:imagem="produto.imagem"
      ></CartaProduto>
    </body>
  </div>
</template>

<script>
import CartaProduto from "../components/CartaProduto.vue";
import Navbar from "../components/Navbar.vue";
import TopNavbar from "../components/TopNavbar.vue";
import axios from "axios";
var lista = [];

/*
<ul>
        <li v-for="product of products" :key="product.id">{{product.name}}</li>
      </ul>

*/
export default {
  name: "Search",
  components: {
    Navbar,
    TopNavbar,
    CartaProduto,
  },
  data() {
    return {
      lista: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      var plataforma = this.$route.params.plataforma;

      axios({
        method: "get",
        url: `http://localhost:3000/produto/display/plataforma/` + plataforma,
      }).then((response) => {
        this.lista = response.data;
        console.log(this.lista);
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

.plataformahome {
  margin: 200px;
}

.resetbtn {
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 50px;
}

.menu-search {
  margin-top: 30px;
}
</style>
