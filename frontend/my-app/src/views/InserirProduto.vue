<template>
    <div>
        <h1 class="h1CriarProduto">Inserir Produto</h1>
        <div class="inserirDadosDoProduto">
            <br>
            <input class="inserirDadosProduto" v-model="nome" type="text" placeholder="Nome..." required/>
            <input class="inserirDadosProduto" v-model="plataforma" type="text" placeholder="Plataforma..." required/>
            <br>
            <br>
            <input class="inserirDadosProduto" v-model="consola" type="text" placeholder="Consola..." required/>
            <input class="inserirDadosProduto" v-model="genero" type="text" placeholder="Genero..." required/>
            <br>
            <br>
            <select v-model="categoria" class="selectBoxCriar" required>
            <option disabled value="">Categoria</option>
            <option value="jogo">Jogo</option>
            <option value="consola">Consola</option>
            <option value="acessorio">Acessorio</option>
            </select>
            <input class="inserirDadosProduto" v-model="classificacao" type="number" min="0" max="10" placeholder="Classificação..." required/>
            <br>
            <br>
            <input class="inserirDadosProduto" v-model="preco" type="number" min="0" placeholder="Preço..." required/>
            <input class="inserirDadosProduto" v-model="stock" type="number" min="0" placeholder="Stock..." required/>
            <br>
            <br>
            <input class="inserirDadosProdutoDescricao" v-model="descricao" type="text" placeholder="Descrição..." required/>     
            <br>
            <br>
            <div class="divCheckBox">
                <input type="checkbox" id="checkbox" class="checkbox" v-model="ativo">
                <label for="checkbox" class="checkboxLabel" v-if="ativo">Ativo</label>
                <label for="checkbox" class="checkboxLabel" v-else>Inativo</label>
            </div>
            <br>
            <br>
            <button class="btnInserirProduto" v-on:click="inserirProduto()">Inserir</button>
            <router-link :to="{path: '/admArea'}" tag="button" class="btnInserirProduto">Voltar</router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "InserirProduto",
  data: function() {
    return {
      url: "",
      nomesLista: [],
      nome: "",
      plataforma: "",
      genero: "",
      consola: "",
      classificacao: "",
      stock: "",
      preco: "",
      ativo: "",
      categoria: "",
      descricao: "",
      imagem: "",
      imagemDestaque: "",
    };
  },
  mounted() {
    this.getNomes();
  },
  methods: {
    getNomes() {
       axios({
        method: "get",
        url: `http://localhost:3000/produto/nomes/`,
      }).then((response) => {
        this.nomesLista = response.data;
      }) 
    },
    inserirProduto() {
        var ativar = 0;
        var existeNome = false;
        if(this.ativo == true) {
            ativar = 1;
        }
        if(this.nome != null && this.nome != "" 
            && this.plataforma != null && this.plataforma != "" 
            && this.genero != null && this.genero != "" 
            && this.consola != null && this.consola != "" 
            && this.classificacao != null && this.classificacao != "" 
            && this.stock != null && this.stock != "" 
            && this.preco != null && this.preco != "" 
            && this.categoria != null && this.categoria != "" 
            && this.descricao != null && this.descricao != "") 
        {
            for(var name of this.nomesLista) {
                if(name.nome == this.nome) {
                    existeNome = true;
                }
            }
            if(existeNome == false) {
                        
                axios({
                    method: "post",
                    url: `http://localhost:3000/produto/insert`,
                    data: {
                        nome: this.nome,
                        plataforma: this.plataforma,
                        genero: this.genero,
                        consola: this.consola,
                        classificacao: this.classificacao,
                        stock: this.stock,
                        preco: this.preco,
                        ativo: ativar,
                        categoria: this.categoria,
                        descricao: this.descricao,
                        imagem: this.imagem,
                        imagemDestaque: this.imagemDestaque,
                    }
                }).then((response) => {
                    window.alert("Produto inserido com sucesso!");
                    this.$router.push('/admArea');
                })
                        
            } else {
                window.alert("Nome indisponivel!");
            }
        } else {
            window.alert("Não deixe campos em branco!");
        }
    }
  }
};
</script>

<style>

    .h1CriarProduto {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 40px;
        color: rgb(240, 228, 205);
    }

    .checkboxLabel {
        color: rgb(240, 228, 205);
        width: 30px;
        margin-left: 10px;
        font-size: 20px;
    }

    .inserirDadosProduto {
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
        padding: 5px;
        font-size: 20px;
        border-radius: 5px;
        color: white;
        background-color: rgb(48, 48, 48);
        width: 20%;
    }

    .inserirDadosProdutoDescricao {
        width: 55%;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
        padding: 5px;
        font-size: 20px;
        border-radius: 5px;
        color: white;
        background-color: rgb(48, 48, 48);
    }

    .warning {
        color: rgb(240, 228, 205);
    }

    .selectBoxCriar {
        margin-bottom: 20px;
        width: 20%;
        margin-left: 10px;
        margin-right: 10px;
        padding: 5px;
        font-size: 20px;
        border-radius: 5px;
        color: white;
        background-color: rgb(48, 48, 48);
    }

    .btnInserirProduto {
        width:10%;
        font-size: 25px;
        padding-top: 3px;
        padding-bottom: 3px;
        border-radius: 5px;
        margin-bottom: 10px;
        margin-left: 15px;
        margin-right: 15px;
        cursor: pointer;
        background-color: rgb(48, 48, 48);
        color: white;
    }

</style>