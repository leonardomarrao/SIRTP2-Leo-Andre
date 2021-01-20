<template>
  <div class="card">
    <img class="img" :src="dataUrl" />
    <br />
    <div class="container">
      <a class="nome" href="/infoproduto">{{ produto.nome }}</a>
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