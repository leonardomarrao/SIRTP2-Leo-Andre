<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class="bottom"></Navbar>
    </header>
    <body>
      <div class="centrar"> 
        <CartaProdutoSingle v-bind:produto="produto"/>
        <Comentar v-if="user" />
      </div>
      <br>
        <h1>Comentarios</h1>
        <div class="todosComentarios" v-for="comentario of listaComentarios" :key="comentario.avaliacao.id">
          <Comentarios v-bind:comentario="comentario"/>
          <br>
        </div>
      
    
    </body>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TopNavbar from "../components/TopNavbar.vue";
import CartaProdutoSingle from "../components/CartaProdutoSingle.vue";
import Comentar from "../components/Comentar.vue";
import Comentarios from "../components/Comentarios.vue";
import axios from "axios";
export default {
  name: "InfoProduct",
  components: {
    Navbar,
    TopNavbar,
    CartaProdutoSingle,
    Comentar,
    Comentarios,
  },
  data() {
    return {
      produto: {},
      listaComentarios: {},
      user: localStorage.getItem('user'),
      idcli: localStorage.getItem('id'),
    }
  },
  mounted() {
    this.getProducts();
    this.getComentaries();
  },
  methods: {
    getProducts() {
      var id = this.$route.params.id;
      
      axios({
        method: "get",
        url: `http://localhost:3000/produto/id/` + id,
      }).then((response) => {
        this.produto = response.data;
      })
    },
    getComentaries() {
      var id = this.$route.params.id;
      axios({
        method: "get",
        url: `http://localhost:3000/avaliacao/produto/` + id,
      }).then((response) => {
        this.listaComentarios = response.data;
        
        
      })
    },
    
    
  }

  
}
</script>

<style>
  .centrar {
    margin: auto;
    width: 80%;
  }

</style>