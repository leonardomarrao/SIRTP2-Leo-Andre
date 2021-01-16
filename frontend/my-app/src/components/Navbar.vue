<template>
  <nav>
    <a class="btn" href="/pesquisa"><div class="menu-item">Home</div></a>
    <a class="btn" href="/pesquisa"><div class="menu-item">Carlos</div></a>
    <Dropdown title="Services" :items="services" />
    <a class="btn" href="/pesquisa"><div class="menu-item">Rogerio</div></a>
    <a class="btn" href="/pesquisa"><div class="menu-item">Tiago</div></a>
  </nav>
</template>

<script>
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
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4;
}

nav .menu-item.active,
nav .menu-item:hover {
  cursor: pointer;
  background-color: #444;
  border-bottom-color: red;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>