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
<style >
.img {
  height: 300px;
  width: 200px
}
.card{
  margin: 20px;
  width: 350px;
  height: 350px;
  border-radius: 20px;
  background-color: rgb(241, 236, 236);
  border:1px solid black;
 
}
.nome {

  text-decoration: none;
  color: black;

}
</style>
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
