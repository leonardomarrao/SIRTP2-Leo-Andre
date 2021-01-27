<template>
  <div class="home">
    <header>
      <TopNavbar class="top"></TopNavbar>
      <Navbar class="bottom"></Navbar>
    </header>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import TopNavbar from "../components/TopNavbar.vue";
import axios from "axios";
export default {
  
  name: "Home",
  async created() {
      console.log(this.user);
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/cliente`, 
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      console.log(response.data[0].username);
      this.user = response.data[0].username;
    },
  components: {
    Navbar,
    TopNavbar,
  },
  data() {
    return {
      users: [],
      user: "teste"
    };
  },
  mounted: {
    
  },
  methods: {
    clearStorage() {
      localStorage.clear();

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
</style>
