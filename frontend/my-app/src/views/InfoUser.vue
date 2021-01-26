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
    InfoUtilizador,
  },
  data() {
    return {
      cliente: {},
    }
  },
  mounted() {
    this.getClients();
  },
  methods: {
    getClients() {
      var id = this.$route.params.id;
      var idcli = 2;
      
      axios({
        method: "get",
        url: `http://localhost:3000/cliente/` + idcli,
      }).then((response) => {
        this.cliente = response.data;
        console.log(this.cliente);
        
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