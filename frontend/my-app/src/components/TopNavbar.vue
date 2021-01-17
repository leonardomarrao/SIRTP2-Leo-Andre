<template>
  <nav>
    <a href="/" class="btnhome"><img class="topN" src="../assets/logo.png" /></a>
    <div class="container">
      <input
        class="pesquisa"
        type="text"
        v-model="search"
        placeholder="pesquisa..."
      />
    </div>
  </nav>
</template>

<style>
img {
  padding: 10px;
  width: 200px;
  height: 60px;
}

.imagem {
  display: flex;
  align-items: left;
  justify-content: left;
}

.pesquisa {
  color: black;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: right;
  justify-content: right;
  height: 30px;
  border-radius: 5px;
}

.btnhome {
  cursor: pointer;
  background: transparent;
  border: none !important;
}
</style>

