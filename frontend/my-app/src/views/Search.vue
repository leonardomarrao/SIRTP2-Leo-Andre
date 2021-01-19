<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class = "bottom"></Navbar>   
    </header>
    <body>
      <a class="resetbtn" href="/pesquisa/">{{$route.params.plataforma}}</a>

    </body>
  </div>

  
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TopNavbar from "../components/TopNavbar.vue";
import axios from "axios";
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
  },
  data: {
    lista: []
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios({
        method: 'get',
        url: `http://localhost:3000/produto/display`
      })
      .then(response => {
        this.lista = response.data;
      })
    }
  }
};

lista.forEach(function(p) {
    console.log(p);
});

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