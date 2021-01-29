<template>
<router-link :to="{path: '/produto/' + this.produto.id}" tag="div">
  <div class="destaque">
    <p class="destaqueTexto">Destaque</p>
    <div class="infoDestaque">
      <img :src="dataUrl" class="imgDestaque" />
      <div class="textDestaque">
      <p class="nomeDestaque">{{ produto.nome }}</p>
      <p class="classificacaoDestaque">{{ produto.classificacao }}/10</p>
      </div>
    </div>
  </div>
  </router-link>
</template>

<script>
export default {
  name: "Destaque",
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
          new Uint8Array(this.produto.imagemDestaque.data).reduce(
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
.Destaque {
  font-family: Kenyan;
  
}


.imgDestaque {
  height: 628px;
  width: 1124px;
  position: absolute;
  right: 450px;
  top: 300px;
  border-radius: 100px;
  cursor: pointer;
}
.destaqueTexto {
  color: black;
  font-size: 100px;
  font-family: Kenyan;
  position: absolute;
  padding-left: 100px;
  padding-top: 30px;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff;
}

.nomeDestaque {
  font-family: Kenyan;
  color: black;
  position: absolute;
  bottom: 160px;
  left: 400px;
  font-size: 50px;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff;
    cursor: pointer;
}

.classificacaoDestaque {
  font-family: Kenyan;
  color: black;
  position: absolute;
  bottom: 100px;
  left: 450px;
  font-size: 50px;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff;
}
</style>
