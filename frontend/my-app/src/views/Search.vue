<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class="bottom"></Navbar>
    </header>

    <body>
      <br />
      <div class="filtroCategorias">
        <div class="botoesCategorias">
          <button class="botaoCategoria" @click="categoria = ''" v-on:click="getProducts()">Todos</button>
          <button class="botaoCategoria" @click="categoria = 'consola'" v-on:click="getProductsFromPlataformaAndCategoria()">Consola</button>
          <button class="botaoCategoria" @click="categoria = 'jogo'" v-on:click="getProductsFromPlataformaAndCategoria()">Jogo</button>
          <button class="botaoCategoria" @click="categoria = 'acessorio'" v-on:click="getProductsFromPlataformaAndCategoria()">Acessorio</button>
        </div>
      </div>
      <br />
      <div v-if="categoria=='jogo'"    class="caixaFiltro">
        <select v-model="generoEscolhido" class="filtroGenero">
          <option disabled value="">Genero</option>
          <option v-on:click="getProducts()" style="font-family: Kenyan"
            >Todos</option
          >
          <option
            v-for="produto of listaGeneros"
            :key="produto.id"
            v-on:click="getProductsFromGenderAndPlataform()"
            >{{ produto }}</option
          >
        </select>
      </div>
      <div class="cartoes" v-for="produto of lista" :key="produto.id">
        <CartaProduto v-bind:produto="produto"></CartaProduto>
      </div>
    </body>
  </div>
</template>

<script>
import CartaProduto from "../components/CartaProduto.vue";
import Navbar from "../components/Navbar.vue";
import TopNavbar from "../components/TopNavbar.vue";
import axios from "axios";

export default {
  name: "Search",

  components: {
    Navbar,
    TopNavbar,
    CartaProduto,
  },
  data() {
    return {
      categoria: '',
      lista: [],
      listaGeneros: [],
      listaGenerosPlataforma: [],
      plataforma: this.$route.params.plataforma,
      Storedplataforma: this.$store.getters.getPlataforma,
      generoEscolhido: "",
    };
  },
  mounted() {
    this.getProducts();
    this.getGender();
  },
  methods: {
    getProducts() {
      axios({
        method: "get",
        url:
          `http://localhost:3000/produto/display/plataforma/` + this.plataforma,
      }).then((response) => {
        this.lista = response.data;
      });
    },
    getGender() {
      axios({
        method: "get",
        url: `http://localhost:3000/generos`,
      }).then((response) => {
        for (var p of response.data) {
          if (p.genero != "N/A") {
            this.listaGeneros.push(p.genero);
          }
        }
      });
    },
    getProductsFromGenderAndPlataform() {
      axios({
        method: "get",
        url: `http://localhost:3000/produto/display/plataformagenero/${this.plataforma}/${this.generoEscolhido}`,
      }).then((response) => {
        this.lista = response.data;
      });
    },
    getProductsFromPlataformaAndCategoria() {
      axios({
        method: "get",
        url: `http://localhost:3000/produto/display/plataformacategoria/${this.plataforma}/${this.categoria}`,
      }).then((response) => {
        this.lista = response.data;
        console.log(this.lista.length);
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
  margin-left: 50px;
}

.filtroGenero {
  font-family: Kenyan;
  font-size: 20px;
  background-color: black;
  color: white;
  border-color: transparent;
  border-radius: 5px;
}

option {
  font-family: Kenyan;
  border-color: transparent;
  border-radius: 5px;
  overflow: hidden;
}

.filtroCategorias {
  align-items: center;
  height: 70px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(31, 29, 29, 0.863);
}

.botaoCategoria {
  margin-top: 5px;
  height: 60px;
  width: 90px;
  font-family: Kenyan;
  font-size: 25px;
  background-color: white;
  color: black;
  border-color: transparent;
}

.botaoCategoria:active {
  background-color:black;
  color: white;
}

.botaoCategoria:focus{
  background-color:black;
  color: white;
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
