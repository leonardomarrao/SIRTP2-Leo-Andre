<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class="bottom"></Navbar>
    </header>
    <body>
      <div class="cartoes" v-for="produto of lista" :key="produto.id">
      <CartaProduto v-bind:produto="produto"
      ></CartaProduto>
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
  props: ['plataforma'],
  components: {
    Navbar,
    TopNavbar,
    CartaProduto,
  },
  data() {
    return {
      lista: [],
      teste: ""
    }
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.teste = store.getters.getInfo;
      console.log("IN SEARCH:" + this.teste);
      var plataforma = this.$route.params.plataforma;

      axios({
        method: "get",
        url: `http://localhost:3000/produto/display/plataforma/` + plataforma,
      }).then((response) => {
        this.lista = response.data;
      
      })
    }
  }
};

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
