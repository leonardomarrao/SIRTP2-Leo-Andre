<template>
<div>
    <h1>BBBBBB  </h1>
    
</div>
</template>

<script>
export default {
  name: "AlterarDadosProduto",
  data: function() {
    return {
      url: "",
      idproduto: this.$route.params.id
    };
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
    h1 {
        font-size: 40px;
        color: red;
    }
</style>