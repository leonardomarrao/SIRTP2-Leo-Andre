<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class="bottom"></Navbar>
    </header>
    <Destaque v-bind:produto="produto"></Destaque>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TopNavbar from "../components/TopNavbar.vue";
import Destaque from "../components/Destaque.vue";
import axios from "axios";
export default {
  name: "Home",
  async created() {
      console.log(this.user);
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/cliente`, 
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      console.log(response.data[0].username);
      this.user = response.data[0].username;
    },
  components: {
    Navbar,
    TopNavbar,
    Destaque,
  },
  data() {
    return {
      produto: {imagemDestaque: {data: {}}},
      users: [],
      user: "teste"
    }
  },
  mounted() {
    this.getProductDestaque();

  },
  methods: {
    getProductDestaque() {

      axios({
        method: "get",
        url: `http://localhost:3000/maiorClassificacao`,
      }).then((response) => {
        this.produto = response.data[0];
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

body {
  background-image: url("../assets/background.png");
}

.bottom {
  width: 100vw;
  background-color: rgb(156, 156, 156);
}

.top {
  background-color: rgb(82, 82, 82);
  width: 100vw;
}
</style>
