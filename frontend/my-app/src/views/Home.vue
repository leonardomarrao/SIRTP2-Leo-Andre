<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class = "bottom"></Navbar>
    </header>
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
}

.bottom {
  width: 100vw;
  background-color: #222;
  
}

.top {
background-color: rgb(48, 48, 48);
width: 100vw;

}
</style>
