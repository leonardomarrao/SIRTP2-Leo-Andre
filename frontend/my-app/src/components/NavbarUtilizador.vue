<template>
  <nav>
    <router-link :to="{ path: '/infoUser' }" tag="div" class="btnUT"
      ><div class="menu-itemUT" id="infoUser">
        <p>Informações do Utilizador</p>
      </div></router-link
    >
    <router-link :to="{ path: '/historia' }" tag="div" class="btnUT"
      ><div class="menu-itemUT" id="histCompras">
        <p>Historico de Compras</p>
      </div></router-link
    >
    <router-link :to="{ path: '/favoritos' }" tag="div" class="btnUT"
      ><div class="menu-itemUT" id="FavoritosNav">
        <p>Favoritos</p>
      </div></router-link
    >
  </nav>
</template>

<script>
export default {
  name: "NavbarUtilizador",
};
</script>

<style>
.btnUT {
  text-decoration: none;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  background-color: rgb(32, 31, 31);
  font-size: 25px;
}
nav .menu-itemUT {
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4;
  font-family: Kenyan;
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
