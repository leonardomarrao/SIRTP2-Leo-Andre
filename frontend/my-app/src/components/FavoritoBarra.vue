<template>
  <div class="linhaFavorito">
    <router-link :to="{ path: '/produto/' + produto.id }" tag="div">
      <img class="imgFavorito" :src="dataUrl" />
    </router-link>
    <div class="containerFavorito">
      <router-link :to="{ path: '/produto/' + produto.id }" tag="div">
        <p class="infoFavorito" id="nomeFavorito">{{ produto.nome }}</p>
      </router-link>
      <p class="infoFavorito">{{ produto.preco }} €</p>
      <p class="infoFavorito">{{ produto.genero }}</p>
      <p class="infoFavorito">{{ produto.classificacao }}/10</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoritoBarra",
  data: function() {
    return {
      url: "",
    };
  },
  props: {
    produto: {
      type: Object,
    },
  },
  computed: {
    dataUrl() {
      return (
        "data:image/jpeg;base64," +
        btoa(
          new Uint8Array(this.produto.imagem.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )
      );
    },
  },
};
</script>

<style>
.linhaFavorito {
  background-color: rgba(133, 125, 125, 0.473);
  height: 160px;
  width: auto;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 17px;
}

.imgFavorito {
  float: left;
  height: 145px;
  border-radius: 15px;
  padding-top: 20px;
  cursor: pointer;
}

.infoFavorito {
  float: left;
  padding-top: 50px;
  font-size: 50px;
  font-family: Kenyan;
  color: white;
}

.containerFavorito {
  justify-content: space-between;
  display: flex;
  margin-left: 300px;
  padding-right: 100px;
}

#nomeFavorito {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

#nomeFavorito:hover {
  text-decoration: underline;
  transform: scale(1.1);
}
</style>
