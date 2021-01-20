<template>
  <div class="card" v-if="produto.nome">
    <img class="img" :src="dataUrl" />
    <br />
    <div class="container">
        <p class="nome">{{ produto.nome }}</p>
        <p class="nome">{{ produto.plataforma }}</p>
        <p>{{ produto.preco  }} €</p>    
    </div>
  </div>
</template>

<script>
export default {
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
      console.log(this.produto);
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