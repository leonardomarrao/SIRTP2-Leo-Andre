<template>
  <div class="cartaProdutoSingle">
    <div class="carta" v-if="produto.nome">
      <div class="container-image">
        <img class="imagem" :src="dataUrl" />
      </div>

      <div class="container-info">
        <h1 class="titulo">{{ produto.nome }}</h1>
        <br />
        <div class="detailsupdesc">
          <p class="details">Versão: {{ produto.consola }}</p>
          <p class="details">Genero: {{ produto.genero }}</p>
          <p class="details">Classificação: {{ produto.classificacao }}/10</p>
        </div>
        <br />

        <p class="detailsdesc">Descrição:<br /><br />{{ produto.descricao }}</p>
        <br />

        <div class="detailsbellowdesc">
          <p class="detailsprice">Preço: {{ produto.preco }} €</p>
        </div>
        <div class="btndiv">
          <router-link v-if="user && user == 'admin'" :to="{path: '/alterarDadosProduto/' + produto.id}" tag="button" class="btnEdit">Editar</router-link>
          <button class="btnFav" v-on:click="inserirOuRemoverFavorito()">
            <img class="favorito" src="../assets/favorito.png" />
          </button>
          <button class="btnbuy" v-on:click="comprarProduto()">
            <img class="carrinho" src="../assets/carrinho.png" />
          </button>

        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      url: "",
      user: localStorage.getItem('user'),
      idcli: localStorage.getItem('id'),
      idpro: this.$route.params.id
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
  mouted() {
    checkFavorito()
  },
  methods: {
    inserirOuRemoverFavorito() {
      if(localStorage.getItem('user')) {
        if(localStorage.getItem('user') != "admin") {
          axios({
            method: "post",
            url: `http://localhost:3000/favorito/insertOrRemoveFav`,
            data:{
              idcli: this.idcli,
              idpro: this.idpro
            }
          }).then((response) => {
            window.alert(response.data.mensagem);
            window.location.reload();
          })
        } else {
          window.alert("Admin, qual é a necessidade disto? Para de gastar o meu tempo!");
        }
      } else {
        this.$router.push('/login');
      }
    },
    comprarProduto() {
      if(localStorage.getItem('user')) {
        if(localStorage.getItem('user') != "admin") {
          const current = new Date();
          const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
          axios({
            method: "post",
            url: `http://localhost:3000/compra/insert`,
            data:{
              idcli: this.idcli,
              idpro: this.idpro,
              valor: this.produto.preco,
              data: date

            }
          }).then((response) => {
            window.alert(response.data.mensagem);
          })
        } else {
          window.alert("Admin, não compres os teus proprios produtos!");
        }
      } else {
        this.$router.push('/login');
      }
    }   
  }
};
</script>

<style>
.imagem {
  height: 300px;
  width: 200px;
  margin: 20px;
  border-radius: 20px;
  transition: all 0.4s ease-in-out;
}

.imagem:hover {
  box-shadow: 0 0 11px rgba(255, 255, 255, 0.2);
  transform: scale(1.3);
}

.carta {
  margin: 20px;
  width: auto;
  height: 550px;
  border-radius: 20px;
  background-color: rgb(68, 65, 65);
  border: 1px solid black;
  font-family: Kenyan;
  font-size: 24px;
}

.container-image {
  margin-left: 40px;
  margin-top: 70px;
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
  font-size: 24px;
}

.details {
  text-decoration: none;
  color: white;
  font-family: Kenyan;
  font-size: 24px;
}

.detailsupdesc {
  margin-left: 80px;
  margin-right: 110px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: white;
  font-family: Kenyan;
  font-size: 24px;
}

.detailsbellowdesc {
  text-decoration: none;
  color: white;
  font-family: Kenyan;
  font-size: 24px;
}

.detailsdesc {
  text-decoration: none;
  color: white;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-style: outset;
  padding: 5px;
  font-family: Kenyan;
  font-size: 24px;
}

.detailsprice {
  text-decoration: none;
  color: white;
  text-align: center;
  font-family: Kenyan;
  font-size: 24px;
}

.titulo {
  text-align: center;
  font-family: Kenyan;
  color: white;
}

.btndiv {
  margin-left: 80%;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  font-family: Kenyan;
  font-size: 24px;
}

.btnbuy {
  margin-right: 20px;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  padding: 1px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin-left: 0;
  font-family: Kenyan;
  font-size: 22px;
  color: rgb(255, 255, 255);
  border: 2px solid black;
}

.carrinho {
  height: 50px;
  width: 55px;
  transition: all 0.2s ease-in-out;
}

.btnbuy:hover {
  background-color: rgb(17, 122, 40);
  transform: scale(1.2);
}

.btnFav {
  margin-right: 10px;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  padding: 1px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin-left: 0;
  font-family: Kenyan;
  font-size: 22px;
  color: rgb(255, 255, 255);
  border: 2px solid black;
}

.btnFav:hover {
  background-color: rgb(204, 12, 12);
  transform: scale(1.2);
}

.btnEdit {
  margin-right: 10px;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  padding: 1px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin-left: 0;
  font-family: Kenyan;
  font-size: 22px;
  color: black;
  border: 2px solid black;
}

.btnEdit:hover {
  background-color: rgb(21, 54, 199);
  transform: scale(1.2);
}

.favorito {
  height: 50px;
  width: 55px;
}
</style>
