<template>
  <div class="linhaFavorito">
    <img class="img" :src="dataUrl" />
    <br />
    <div class="container">
      <router-link :to="{ path: '/produto/' + this.favorito.id }" tag="div">
        <p class="nome">{{ favorito.nome }}</p>
      </router-link>
      <p class="nome">{{ favorito.preco }} €</p>
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

</style>
