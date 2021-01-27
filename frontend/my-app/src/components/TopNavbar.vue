<template>
  <nav>
    <router-link :to="{path: '/'}" tag="div" class="btnhome"><img class="topN" src="../assets/logo.png" /></router-link>
    <div class="container">
     <!-- <input
        class="pesquisa"
        type="text"
        v-model="search"
        placeholder="pesquisa..."
      /> -->
      <router-link v-if="!user"  :to="{path: '/login'}" tag="div" class="btnLogin">Login</router-link>
      <button v-else v-on:click="clearStorage()">Logout</button>
      
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
img {
  padding: 10px;
  width: 200px;
  height: 60px;
}

.imagem {
  display: flex;
  align-items: left;
  justify-content: left;
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

