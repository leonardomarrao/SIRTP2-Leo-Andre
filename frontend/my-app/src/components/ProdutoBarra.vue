<template>
  <div class="linhaAdminProduto">
      <p v-if="produto.ativo == 1" class="infoAtivoAdminProduto">Ativo</p>
      <p v-else class="infoInativoAdminProduto">Inativo</p>
    <router-link :to="{ path: '/produto/' + produto.id }" tag="div">
      <img class="imgAdminProduto" :src="dataUrl" />
    </router-link>
    <div class="containerAdminProduto">
      <router-link :to="{ path: '/produto/' + produto.id }" tag="div">
        <p class="infoAdminProduto" id="nomeAdminProduto">{{ produto.nome }}</p>
      </router-link>
      <router-link :to="{ path: '/alterarDadosProduto/' + produto.id }" tag="div">
        <p class="infoAdminProduto" id="nomeAdminProduto">Editar</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdutoBarra",
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
.linhaAdminProduto {
  background-color: rgba(133, 125, 125, 0.473);
  height: 160px;
  width: auto;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  border-radius: 17px;
  position: relative;
}

.imgAdminProduto {
  float: left;
  height: 145px;
  border-radius: 15px;
  padding-top: 20px;
  cursor: pointer;
  margin-left: 50px;
  position: absolute;
  margin-left: 80px;
}

.infoAdminProduto {
  float: left;
  padding-top: 50px;
  font-size: 50px;
  font-family: Kenyan;
  color: white;
}

.containerAdminProduto {
  justify-content: space-between;
  display: flex;
  margin-left: 300px;
  padding-right: 100px;
}

#nomeAdminProduto {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

#nomeAdminProduto:hover {
  text-decoration: underline;
  transform: scale(1.1);
}

.infoAtivoAdminProduto {
  float: left;
  padding-top: 50px;
  font-size: 50px;
  font-family: Kenyan;
  color: white;
  margin-left: 15px;
  width: 110px;
  background-color: green;
}

.infoInativoAdminProduto {
  float: left;
  padding-top: 50px;
  font-size: 50px;
  font-family: Kenyan;
  color: white;
  margin-left: 15px;
  width: 110px;
  background-color: rgb(245, 16, 16);
}
</style>
