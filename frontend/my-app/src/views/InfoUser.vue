<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <NavbarUtilizador></NavbarUtilizador>
    </header>
    <body>
      <br />
      <div>
        <InfoUtilizador v-bind:cliente="cliente"/>  
      </div>
    </body>
  </div>

</template>

<script>
import TopNavbar from "../components/TopNavbar.vue";
import NavbarUtilizador from "../components/NavbarUtilizador.vue";
import InfoUtilizador from "../components/InfoUtilizador.vue";
import axios from "axios";
export default {
  name: "InfoUser",
  components: {
    TopNavbar,
    NavbarUtilizador,
    InfoUtilizador
  },
  data() {
    return {
      cliente: {},
      user: localStorage.getItem('user')
    }
  },
  mounted() {
    this.getClients();
  },
  methods: {
    getClients() {
      console.log("Nome: "+this.user);
      axios({
        method: "get",
        url: `http://localhost:3000/cliente/` + this.user,
      }).then((response) => {
        this.cliente = response.data;
        
      })
    }
  }
}
</script>

<style>
.bottom {
  width: 100vw;
  background-color: rgb(156, 156, 156);
}

.top {
  background-color: rgb(82, 82, 82);
  width: 100vw;
}
</style>