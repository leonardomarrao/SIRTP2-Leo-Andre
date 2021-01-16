<template>
  <nav>
    <div class="menu-item"><a href="#">Home</a></div>
    <div class="menu-item"><a href="#"></a>Carlos</div>
    <Dropdown title="Services" :items="services" />
    <div class="menu-item"><a href="#"></a>Rogerio</div>
    <div class="menu-item"><a href="#"></a>Tiago</div>
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
          link: "#",
        },

        {
          title: "é",
          link: "#",
        },

        {
          title: "um",
          link: "#",
        },

        {
          title: "deus",
          link: "#",
        },
      ],
    };
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: #444;
  border-bottom-color: red;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>