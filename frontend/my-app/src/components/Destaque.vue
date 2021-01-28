<template>
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
  height: 528px;
  width: 1024px;
  position: absolute;
  left: 350px;
  bottom: 135px;
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
  bottom: 220px;
  left: 400px;
  font-size: 50px;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff;
}

.classificacaoDestaque {
  font-family: Kenyan;
  color: black;
  position: absolute;
  bottom: 160px;
  left: 450px;
  font-size: 50px;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff;
}
</style>
