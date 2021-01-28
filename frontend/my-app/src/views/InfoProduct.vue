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
        <div class="todosComentarios" v-for="comentario of listaComentarios" :key="comentario.id">
          <Comentarios/>
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
      console.log(id);
      axios({
        method: "get",
        url: `http://localhost:3000/avaliacao/` + id,
      }).then((response) => {
        this.listaComentarios = response.data;
        console.log("carlos");
        console.log(this.listaComentarios);
        
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