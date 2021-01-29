<template>
  <nav>
    
    <a class="btn" href="/pesquisa/playstation"><div class="menu-item"><img class="bottonNimg" src="../assets/playstationlogo.png"/></div></a>
    <a class="btn" href="/pesquisa/xbox"><div class="menu-item"><img class="bottonNimg" src="../assets/xboxlogo.png"/></div></a>
    <a class="btn" href="/pesquisa/nintendo"><div class="menu-item"><img class="bottonNimg" src="../assets/nintendologo.png"/></div></a>
    <a class="btn" href="/pesquisa/pc"><div class="menu-item"><img class="bottonNimg" src="../assets/pclogo.png"/></div></a>
    <a class="btn" href="/pesquisa/retro"><div class="menu-item"><img class="bottonNimg" src="../assets/retrologo.png"/></div></a>

  <!--  
    <router-link :to="{path: '/pesquisa/playstation'}" v-on:click.native="setPlatPS()" tag="div" class="btn"><div class="menu-item"><img class="bottonNimg" src="../assets/playstationlogo.png"/></div></router-link>
    <router-link :to="{path: '/pesquisa/xbox'}" v-on:click.native="setPlatXB()" tag="div" class="btn"><div class="menu-item"><img class="bottonNimg" src="../assets/xboxlogo.png"/></div></router-link>
    <router-link :to="{path: '/pesquisa/nintendo'}" v-on:click.native="setPlatNI()" tag="div" class="btn"><div class="menu-item"><img class="bottonNimg" src="../assets/nintendologo.png"/></div></router-link>
    <router-link :to="{path: '/pesquisa/pc'}" v-on:click.native="setPlatPC()" tag="div" class="btn"><div class="menu-item"><img class="bottonNimg" src="../assets/pclogo.png"/></div></router-link>
    <router-link :to="{path: '/pesquisa/retro'}" v-on:click.native="setPlatRE()" tag="div" class="btn"><div class="menu-item"><img class="bottonNimg" src="../assets/retrologo.png"/></div></router-link>
   -->
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      p: ""
    }
  },
  methods: {
    setPlatPS: function () {
      var plataforma = "playstation"
      this.$store.commit("setPlataforma", plataforma); 
      console.log("PLATAFORMA mudou para: " + this.$store.getters.getPlataforma);
    },
    setPlatXB: function () {
      var plataforma = "xbox"
      this.$store.commit("setPlataforma", plataforma);
      console.log("PLATAFORMA mudou para: " + this.$store.getters.getPlataforma);  
    },
    setPlatNI: function () {
      var plataforma = "nintendo"
      this.$store.commit("setPlataforma", plataforma);  
      console.log("PLATAFORMA mudou para: " + this.$store.getters.getPlataforma);  
    },
    setPlatPC: function () {
      var plataforma = "pc"
      this.$store.commit("setPlataforma", plataforma);  
      console.log("PLATAFORMA mudou para: " + this.$store.getters.getPlataforma); 
    },
    setPlatRE: function () {
      var plataforma = "retro"
      this.$store.commit("setPlataforma", plataforma);  
      console.log("PLATAFORMA mudou para: " + this.$store.getters.getPlataforma);  
    }
  }
};

</script>

<style>
.btn {
  text-decoration: none;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
}
nav .menu-item {
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4;
}

nav .menu-item.active,
nav .menu-item:hover {
  cursor: pointer;
  background-color: rgb(82, 82, 82);
  border-bottom-color: red;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

.bottonNimg {
  height: 40px;
  width: 130px;
  padding: 10px;
}

</style>