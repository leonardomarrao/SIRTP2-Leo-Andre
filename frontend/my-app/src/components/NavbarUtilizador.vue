<template>
  <nav class="navbarUtilizador">
    <router-link :to="{ path: '/infoUser' }" tag="div" class="btnUT"
      ><div class="menu-itemUT" id="infoUser">
        <p class="textoNavbarUt">Informações</p>
      </div></router-link
    >
    <router-link :to="{ path: '/historia' }" tag="div" class="btnUT"
      ><div class="menu-itemUT" id="histCompras">
        <p class="textoNavbarUt">Historico</p>
      </div></router-link
    >
    <router-link :to="{ path: '/favoritos' }" tag="div" class="btnUT"
      ><div class="menu-itemUT" id="FavoritosNav">
        <p class="textoNavbarUt">Favoritos</p>
      </div></router-link
    >
  </nav>
</template>

<script>
export default {
  name: "NavbarUtilizador",
};
</script>

<style scoped>
.btnUT {
  text-decoration: none;
}
.textoNavbarUt{
color: white;
font-family: Kenyan;
}

.navbarUtilizador {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  background-color: rgb(32, 31, 31);
  font-size: 25px;
}
nav .menu-itemUT {
  padding-left: 50px;
  padding-right: 50px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4;
}

#FavoritosNav {
  margin-right: 500px;
}

#infoUser {
  margin-left: 250px;
}

nav .menu-itemUT.active,
nav .menu-itemUT:hover {
  cursor: pointer;
  background-color: rgb(82, 82, 82);
  border-bottom-color: red;
}

nav .menu-itemUT a {
  color: inherit;
  text-decoration: none;
}
</style>
