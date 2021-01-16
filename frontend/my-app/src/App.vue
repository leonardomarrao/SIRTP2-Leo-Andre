<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/favoritos">Favoritos</router-link> |
      <router-link to="/historia">Historia</router-link> |
      <router-link to="/infoproduto">Info Produto</router-link> |
      <router-link to="/infouser">Info User</router-link> |
      <router-link to="/registar">Registar</router-link> |
      <router-link to="/pesquisa">Pesquisa</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
