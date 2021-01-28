<template>
  <div class="login">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class="bottom"></Navbar>
    </header>
    <body>
      <div class="registardiv">
        <p class="textoRegistar">Registar</p>
        <input
          class="inputregistar"
          v-model="username"
          placeholder="Nome de Utilizador..." required
        /><br /><br />
        <input
          class="inputregistar"
          v-model="password"
          type="password"
          placeholder="Palavra Chave..." required
        /><br /><br />
        <input
          class="inputregistar"
          v-model="passwordConf"
          type="password"
          placeholder="Confirme Palavra Chave..." required
        /><br /><br />
        <input
          class="inputregistar"
          v-model="email"
          placeholder="Email..." required
        /><br /><br />
        <input
          class="inputregistar"
          v-model="nome"
          placeholder="Nome..." required
        /><br /><br />
        <input
          class="btnregistar"
          v-on:click="handleSubmit()"
          type="submit"
          value="Registar"
        /><br />
        <router-link :to="{ path: '/login' }" tag="button" class="btnreglogin"
          >Voltar ao login...</router-link
        >
      </div>
    </body>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TopNavbar from "../components/TopNavbar.vue";
import axios from "axios";
export default {
  name: "Login",
  components: {
    Navbar,
    TopNavbar,
  },
  data() {
    return {
      users: [],
      username: "",
      password: "",
      passwordConf: "",
      email: "",
      nome: ""
    };
  },
  mounted() {
  },
  methods: {
    async handleSubmit() {
      const response = await axios({
        method: "post",
        url: `http://localhost:3000/cliente/registar`, 
        data: {
            username: this.username,
            password: this.password,
            passwordConf: this.passwordConf,
            email: this.email,
            nome: this.nome
          }
      }).then((response) => {
        alert(response.data.mensagem);
        this.$router.push('/login');
      }).catch(error => window.alert(error.response.data.mensagem));
        
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

body {
  font-family: "montserrat", sans-serif;
  background-image: url("../assets/background.png");
}

.registardiv {
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  text-align: left;
  cursor: context-menu;
}

.textoRegistar {
  text-align: center;
  font-size: 50px;
  color: white;
  font-family: "montserrat", sans-serif;
  padding: 20px;
}

.inputregistar {
  font-size: 20px;
  padding: 3px;
  border-radius: 5px;
  color: white;
  background-color: rgb(48, 48, 48);
  margin-bottom: 5px;
}

.btnregistar {
  font-size: 40px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  background-color: rgb(48, 48, 48);
  color: white;
}

.btnreglogin {
  margin-top: 10px;
  color: white;
  background-color: transparent;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  border: transparent;
  cursor: pointer;
  font-size: 18px;
}

.btnreglogin:hover {
  text-decoration: underline;
}
</style>
