<template>
  <div class="login">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class = "bottom"></Navbar>
    </header>
    <body>
        <div class="logindiv">
            <p class="textoLogin">Login</p>
            <input class="inputlogin" v-model="username" placeholder="Nome de Usuário..."><br><br>
            <input class="inputlogin" v-model="password" type="password" placeholder="Palavra Chave..."><br><br>
            <input class="btnlogin" v-on:click="check()" type="submit"  value="Entrar"><br>
            <router-link :to="{path: '/registar'}" tag="button" class="btnreglogin">Registar</router-link>
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
        username: '',
        password: '',
        existe: false
    }
  },
  mounted() {
    //OUT
    this.getCliente();
  },
  methods: {
    //OUT
    getCliente() {
      axios({
        method: "get",
        url: `http://localhost:3000/cliente`, 
        
      }).then((response) => {
        this.users = response.data;
      })
    },
    check: function () {
        for(var user of this.users) {
          if(user.username == this.username && user.password == this.password) {
            this.existe = true;
            this.$store.commit("setUser", user);
          }
        }
        if(!this.existe) {
          console.log("Nao existe utilizador");
        }else {
          console.log("IN LOGGIN USERNAME AND PASSWORD: " + this.$store.getters.getInfo.user.username + " " + this.$store.getters.getInfo.user.password);
        }
/*
        axios({
        method: "get",
        url: `http://localhost:3000/login`, 
        data: {
            username: this.username,
            password: this.password
          }
      }).then((response) => {
        this.users = response.data;
        this.existe = true;
      })   
      */
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
  font-family: "montserrat", sans-serif;
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

.textoLogin {

  font-size: 70px;
  color: white;
  font-family: "montserrat", sans-serif;
  padding: 20px;
  text-align: center;
}

.logindiv {
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    text-align: left;
    cursor: context-menu;
}

.labellogin {
    margin-bottom: 5px;
    color: white;
}

.inputlogin {
    font-size: 30px;
    padding: 3px;
    border-radius: 5px;
    color: white;
    background-color: rgb(48, 48, 48);
    margin-bottom: 5px;
}

.btnlogin {
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
    font-size: 25px;
    margin-top: 10px;
    color: white;
    background-color: transparent;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    border: transparent;
    cursor: pointer;
}

.btnreglogin:hover {
    text-decoration: underline;
}

</style>