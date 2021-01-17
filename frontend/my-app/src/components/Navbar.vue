<template>
  <nav>
    <a class="btn" href="/pesquisa/playstation"><div class="menu-item"><img class="bottonNimg" src="../assets/playstationlogo.png"/></div></a>
    <a class="btn" href="/pesquisa/xbox"><div class="menu-item"><img class="bottonNimg" src="../assets/xboxlogo.png"/></div></a>
    <a class="btn" href="/pesquisa/nintendo"><div class="menu-item"><img class="bottonNimg" src="../assets/nintendologo.png"/></div></a>
    <a class="btn" href="/pesquisa/pc"><div class="menu-item"><img class="bottonNimg" src="../assets/pclogo.png"/></div></a>
    <a class="btn" href="/pesquisa/retro"><div class="menu-item"><img class="bottonNimg" src="../assets/retrologo.png"/></div></a>
  </nav>
</template>

<script>
/*
import Dropdown from "../components/Dropdown.vue";
export default {
  name: "navbar",
  components: {Dropdown},
  data() {
    return {
      services: [
        {
          title: "br",
          link: "/pesquisa",
        },

        {
          title: "é",
          link: "/pesquisa",
        },

        {
          title: "um",
          link: "/pesquisa",
        },

        {
          title: "deus",
          link: "/pesquisa",
        },
      ],
    };
  },
};
*/
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
}
</style>