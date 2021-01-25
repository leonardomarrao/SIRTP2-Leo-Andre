<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class="bottom"></Navbar>
    </header>
    <body>
      <div class="cartoes" v-for="produto of lista" :key="produto.id">
        <CartaProduto v-bind:produto="produto"></CartaProduto>
      </div>
      
      <div class="caixaFiltro">
    <select v-model="generoEscolhido">
      <option disabled value="">Genero</option>
      <option v-for="produto of listaGeneros" :key="produto.id" v-on:click="getProductsFromGenderAndPlataform()">{{ produto }}</option>
    </select>
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
      
      lista: [],
      listaGeneros: [],
      listaGenerosPlataforma: [],
      plataforma: this.$store.getters.getPlataforma,
      generoEscolhido: "",
      
    };
  },
  mounted() {
    this.getProducts(); //TENTAR CORRER ESTE METODO AO CLICAR NOS OUTROS ROUTERS, ESTA APENAS A CHAMAR A PRIMEIRA VEZ
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
        url:
          `http://localhost:3000/generos`,
        }).then((response) => {
          for(var p of response.data) {
            if(p.genero != "N/A") {
              this.listaGeneros.push(p.genero);
            }
          }

        });
    },
    getProductsFromGenderAndPlataform() {
      axios({
        method: "get",
        url:
          `http://localhost:3000/produto/display/plataforma&genero`,
        data: {
          plataforma: "xbox",
          genero: "Ação"
        }
        }).then((response) => {
          
          console.log(response.data); 
        });
    },
    teste() {
      console.log(this.generoEscolhido);

    }
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
