<template>
<div>
    <h1 class="h1AlterarProdutoAtual">Dados Atuais do Produto</h1>
    <div class="divTabelaDados">
        <v-table :data="produto" class="Tabela1">
            <thead slot="head">
                <th>Nome</th>
                <th>Plaraforma</th>
                <th>Consola</th>
                <th>Categoria</th>
                <th>Genero</th>
                <th>Classificação</th>
                <th>Preço</th>
                <th>Stock</th>
                <th>Estado</th>
            </thead>
            <tbody slot="body">
                <tr>
                <td>{{ produto.nome }}</td>
                <td>{{ produto.plataforma }}</td>
                <td>{{ produto.consola }}</td>
                <td>{{ produto.categoria }}</td>
                <td>{{ produto.genero }}</td>
                <td>{{ produto.classificacao }}</td>
                <td>{{ produto.preco }}</td>
                <td>{{ produto.stock }}</td>
                <td v-if="produto.ativo == 1">Ativo</td>
                <td v-else>Inativo</td>
                </tr>
            </tbody>
        </v-table>
    </div>
    <br>
    <div class="divTabelaDescricao">
        <v-table :data="produto" class="Tabela2">
            <thead slot="head">
                <th>Descrição</th>
            </thead>
            <tbody slot="body">
                <tr>
                <td>{{ produto.descricao }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
    <br>
    <div class="alterarDadosDoProduto">
        <h2 class="warning">Introduza apenas dados que pretenda mudar</h2>
        <br>
        <input class="alterarDadosProduto" v-model="nome" type="text" placeholder="Nome..."/>
        <input class="alterarDadosProduto" v-model="plataforma" type="text" placeholder="Plataforma..."/>
        <input class="alterarDadosProduto" v-model="consola" type="text" placeholder="Consola..."/>
        <input class="alterarDadosProduto" v-model="genero" type="text" placeholder="Genero..."/>
        <br>
        <br>
        <select v-model="categoria" class="selectBoxAlterar">
          <option disabled value="">Categoria</option>
          <option value="jogo">Jogo</option>
          <option value="consola">Consola</option>
          <option value="acessorio">Acessorio</option>
        </select>
        <input class="alterarDadosProduto" v-model="classificacao" type="number" min="0" max="10" placeholder="Classificação..."/>
        <input class="alterarDadosProduto" v-model="preco" type="number" min="0" placeholder="Preço..."/>
        <input class="alterarDadosProduto" v-model="stock" type="number" min="0" placeholder="Stock..."/>
        <br>
        <br>
        <input class="alterarDadosProdutoDescricao" v-model="descricao" type="text" placeholder="Descrição..."/>
        <br>
        <br>
        <div class="divCheckBox">
            <input type="checkbox" id="checkbox" class="checkbox" v-model="ativo">
            <label for="checkbox" class="checkboxLabel" v-if="ativo">Ativo</label>
            <label for="checkbox" class="checkboxLabel" v-else>Inativo</label>
        </div>
        <br>
        <br>
        <button class="btnAlterarDadosProduto" v-on:click="alterarDados()">Alterar Dados</button>
        <router-link :to="{path: '/admArea'}" tag="button" class="btnAlterarDadosProduto">Voltar</router-link>
    </div>

    <div>
        <div id="app">
            <div v-if="!image">
                <h2>Select an image</h2>
                <input type="file" @change="onFileChange">
            </div>
            <div v-else>
                <img :src="image" />
                <button @click="removeImage">Remove image</button>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import axios from "axios";
export default {
  name: "AlterarDadosProduto",
  data: function() {
    return {
      url: "",
      produto: [],
      nomesLista: [],
      idproduto: this.$route.params.id,
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
      image: '',
    };
  },
  mounted() {
    this.getProducts();
    this.getNomes();
  },
  methods: {
      // https://codepen.io/Atinux/pen/qOvawK/
      // encodedImage := base64.StdEncoding.EncodeToString(imageFile)
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      
      this.image = files[0];
       
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
      
      this.image = file;

    },
    removeImage: function (e) {
      this.image = '';
    },
    getProducts() {   
      axios({
        method: "get",
        url: `http://localhost:3000/produto/id/` + this.idproduto,
      }).then((response) => {
        this.produto = response.data;
      })
    },
    getNomes() {
       axios({
        method: "get",
        url: `http://localhost:3000/produto/nomes/`,
      }).then((response) => {
        this.nomesLista = response.data;
      }) 
    },
    alterarDados() {
        var ativar = 0;
        var existeNome = false;
        if(this.ativo == true) {
            ativar = 1;
        }
        for(var name of this.nomesLista) {
            if(name.nome == this.nome) {
                existeNome = true;
            }
        }
        if(existeNome == false) {
                    axios({
                        method: "put",
                        url: `http://localhost:3000/produto/updateDadosProduto/` + this.$route.params.id,
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
                            imagem: this.file,
                            imagemDestaque: this.imagemDestaque,
                        }
                    }).then((response) => {
                        this.produto = response.data;
                        window.alert("Dados de produto atualizados com sucesso!");
                        this.$router.push('/admArea');

                    })
                    
        } else {
            window.alert("Nome indisponivel!");
        }
    }
  }
};
</script>

<style>

    .divTabelaDados {
        width: 50%;
        margin: 0 auto;
    }

    .Tabela1 {
        text-align: left;
        border-spacing: 10px;
        border-collapse: separate;
        border: 1px solid white;  
    }

    .Tabela1 th {
        border-bottom: 1px solid white;
        color: rgb(240, 228, 205);
    }

    .Tabela1 td {
        color: rgb(240, 228, 205);
    }

    .divTabelaDescricao {
        width: 50%;
        margin: 0 auto;
    }

    .Tabela2 {
        text-align: left;
        border-spacing: 10px;
        border-collapse: separate;
        border: 1px solid white;  
    }

    .Tabela2 th {
        border-bottom: 1px solid white;
        color: rgb(240, 228, 205);
    }

    .Tabela2 td {
        color: rgb(240, 228, 205);
    }

    .h1AlterarProdutoAtual {
        margin-top: 10px;
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

    .alterarDadosProduto {
        width: 13%;
        margin-left: 10px;
        margin-right: 10px;
        padding: 5px;
        font-size: 20px;
        border-radius: 5px;
        color: white;
        background-color: rgb(48, 48, 48);
    }

    .alterarDadosProdutoDescricao {
        width: 55%;
        margin-left: 10px;
        margin-right: 10px;
        padding: 5px;
        font-size: 20px;
        border-radius: 5px;
        color: white;
        background-color: rgb(48, 48, 48);
    }

    .warning {
        color: rgb(240, 228, 205);
    }

    .selectBoxAlterar {
        width: 13%;
        margin-left: 10px;
        margin-right: 10px;
        padding: 5px;
        font-size: 20px;
        border-radius: 5px;
        color: white;
        background-color: rgb(48, 48, 48);
    }

    .btnAlterarDadosProduto {
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