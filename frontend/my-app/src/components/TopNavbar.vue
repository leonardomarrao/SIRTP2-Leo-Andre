<template>
  <nav>
    <router-link :to="{path: '/'}" tag="div" class="btnhome"><img class="topN" src="../assets/logo.png" /></router-link>
    <div class="container">
      <router-link v-if="!user"  :to="{path: '/login'}" tag="div" class="btnLogin"></router-link>
      <button v-else v-on:click="clearStorage()" class="btnLogout"><img src="../assets/logout.png" class="imgLogout"/></button>
      
      <router-link v-if="user && user != 'admin'" :to="{path: '/infouser'}" tag="div" class="btnLogin"><img src="../assets/perfil.png" class="imgPerfil"/></router-link>
      <router-link v-if="user && user == 'admin'" :to="{path: '/admArea'}" tag="div" class="btnLogin">Produtos</router-link>
    </div>
     
  </nav>
</template>

<script>
export default {
  
  name: "TopNavBar",
  data() {
    return {
      user: localStorage.getItem('user')
    };
  },
  methods: {
    clearStorage() {
      localStorage.clear();
      window.location.href = '/';
    }
  }
};
</script>

<style>


.topN{

  padding: 10px;
  width: 200px;
  height: 60px;

}

.imagem {
  display: flex;
  align-items: left;
  justify-content: left;
}

.imgLogin{
  height: 50px;
  width: 50px;
  cursor: pointer;
}

.imgPerfil{
  height: 50px;
  width: 50px;
  cursor: pointer;
 float: left;

}

.imgLogout{
  height: 50px;
  width: 50px;
  cursor: pointer;
  float: right;
  
}

.btnLogout{
  background-color: rgb(82, 82, 82);
  float:left;
}

/*.pesquisa {
  color: black;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: right;
  justify-content: right;
  height: 30px;
  border-radius: 5px;
} */

.btnhome {
  cursor: pointer;
  background: transparent;
  border: none !important;
}

.login {

  cursor:pointer;
  background:transparent;
  border: none !important;
  width: 60px;
  height: 60px;
  
  

}
</style>

