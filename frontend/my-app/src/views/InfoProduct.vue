<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class="bottom"></Navbar>
    </header>
    <body>
      
      <CartaProdutoSingle v-bind:produto="produto"/>

    </body>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TopNavbar from "../components/TopNavbar.vue";
import CartaProdutoSingle from "../components/CartaProdutoSingle.vue";
import axios from "axios";
export default {
  name: "InfoProduct",
  components: {
    Navbar,
    TopNavbar,
    CartaProdutoSingle,
  },
  data() {
    return {
      produto: {}
    }
  },
  mounted() {
    this.getProducts();
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
    }
  }
}
</script>