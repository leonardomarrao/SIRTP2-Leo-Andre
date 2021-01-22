<template>
  <div class="carta" v-if="produto.nome">
    <div class="container-image">
      <img class="imagem" :src="dataUrl" />
    </div>
    
    <div class="container-info">
        <h2 class="titulo">{{ produto.nome }}</h2><br>
        <div class="detailsupdesc">
          <p class="details">Versão: {{ produto.consola }}</p>
          <p class="details">Genero: {{ produto.genero }}</p>
        </div><br>
        
        <p class="detailsdesc">Descrição<br><br>{{ produto.descricao }}</p><br>

        <div class="detailsbellowdesc">
          <p class="details">Classificação: {{ produto.classificacao }}/10</p>
          <p class="details">Em stock: {{ produto.stock }} un.</p>
          <p class="detailsprice">Preço: {{ produto.preco  }} €</p> 
        </div><br>

        <div class="btndiv">
          <button class="btnbuy">Comprar</button>
        </div><br>
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

<style >
.imagem {
  height: 300px;
  width: 200px;
  margin: 20px;
  border-radius: 10px; 
}

.imagem:hover {
  box-shadow: 0 0 11px rgba(255, 255, 255, 0.2);
  transform: scale(1.3);
}

.carta{
  margin: 20px;
  width: auto;
  height: 400px;
  border-radius: 20px;
  background-color: rgb(241, 236, 236);
  border:1px solid black;
  font-family: Kenyan;
  font-size: 18px;
}

.container-image {
  margin-left: 40px;
  margin-top: 30px;
	width: 20%;
	float: left;
}

.container-info {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-right: 40px;
	width: 66%;
	float: right;
  text-align: left;
  font-family: Kenyan;
  font-size: 18px;
}

.details {
  text-decoration: none;
  color: black;
  font-family: Kenyan;
  font-size: 18px;
}

.detailsupdesc {
  margin-left: 100px;
  margin-right: 150px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  font-family: Kenyan;
  font-size: 18px;
}

.detailsbellowdesc {
  margin-left: 70px;
  margin-right: 120px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  font-family: Kenyan;
  font-size: 18px;
}

.detailsdesc {
  text-decoration: none;
  color: black;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-style: outset;
  padding: 5px;
  font-family: Kenyan;
  font-size: 18px;
}

.detailsprice {
  text-decoration: none;
  color: black;
  text-align: center;
  font-family: Kenyan;
  font-size: 18px;
}

.titulo {
  text-align: center;
  font-family: Kenyan;
  
}

.btndiv {
  margin-left: 90%;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  font-family: Kenyan;
  font-size: 18px;
}

.btnbuy {
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  background-color: lightgrey;
  margin-left: 0;
  font-family: Kenyan;
  font-size: 18px;
}

.btnbuy:hover {
  background-color: darkgray;
  
}

</style>