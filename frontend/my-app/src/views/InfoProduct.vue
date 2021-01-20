<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class="bottom"></Navbar>
    </header>
    <body>
      <a class="resetbtn" href="/pesquisa/">{{ $route.params.plataforma }}</a>
    </body>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TopNavbar from "../components/TopNavbar.vue";
import axios from "axios";
export default {
  name: "InfoProduct",
  components: {
    Navbar,
    TopNavbar,
  },
}
</script>