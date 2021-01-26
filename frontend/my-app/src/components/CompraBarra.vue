<template>
  <div class="linhaCompra">

    <div class="containerCompra">
      <router-link :to="{ path: '/produto/' + produto.id }" tag="div">
        <p class="infoCompra" id="nomeCompra">{{ produto.id }}</p>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "CompraBarra",
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
.linhaCompra {
  background-color: rgba(133, 125, 125, 0.473);
  height: 160px;
  width: auto;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 17px;
}

.imgCompra {
  float: left;
  height: 145px;
  border-radius: 15px;
  padding-top: 20px;
  cursor: pointer;
}

.infoCompra {
  float: left;
  padding-top: 50px;
  font-size: 50px;
  font-family: Kenyan;
  color: white;
}

.containerCompra {
  justify-content: space-between;
  display: flex;
  margin-left: 300px;
  padding-right: 100px;
}

#nomeCompra {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

#nomeCompra:hover {
  text-decoration: underline;
  transform: scale(1.1);
}
</style>
