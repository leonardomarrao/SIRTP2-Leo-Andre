<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class="bottom"></Navbar>
    </header>
    <router-link :to="{path: '/favoritos'}"  tag="div" class="btn"><div class="menu-item"><img class="bottonNimg" src="../assets/playstationlogo.png"/></div></router-link>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TopNavbar from "../components/TopNavbar.vue";
export default {
  
  name: "Home",
  components: {
    Navbar,
    TopNavbar,
  },
  data() {
    return {
      users: [],
    };
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

.bottom {
  width: 100vw;
  background-color: rgb(156, 156, 156);
  
}

.top {
background-color: rgb(82, 82, 82);
width: 100vw;

}
</style>
