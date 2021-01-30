<template>
  <router-link :to="{path: '/produto/' + this.produto.id}" tag="div">
  <div class="card">
    <img class="imgCartaProduto" :src="dataUrl" />
    <br />
    <div class="container">
        <p class="nome">{{ produto.nome }}</p>
        <p class="nome">{{ produto.preco }} €</p>    
        <p class="nome">Classificação: {{ produto.classificacao }}/10</p>   
    </div>
  </div>
  </router-link>
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

<style >
.imgCartaProduto {
  height: 300px;
  width: 200px;
  padding-top: 10px;
  border-radius: 10px;
}
.card {
  margin: 30px;
  width: 300px;
  height: 390px;
  border-radius: 10px;
  background-color: rgba(68, 65, 65, 0.39);
  transition: box-shadow 0.3s;
  transition: all 0.2s ease-in-out;
}

.produto {
  color: white;
  font-family: Kenyan;
  font-size: 20px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

.card:hover {
  box-shadow: 0 0 11px rgba(255, 255, 255, 0.2);
  transform: scale(1.1);

}
.nome {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-family: Kenyan;
  font-size: 20px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}

</style>