<template>
  <div class="divAlterarDadosUser">
    <h1 class="h1Atuais">Dados Atuais</h1>
    <p>Nome Atual: {{ cliente.nome }}</p>
    <p>Email Atual: {{ cliente.email }}</p>
    <h1 class="h1Novos">Novos Dados</h1>
    <input class="alterarDados" v-model="password" type="password" placeholder="Alterar palavra chave..."/>
    <input class="alterarDados" v-model="passwordConf" type="password" placeholder="Confirme palavra chave..."/>
    <input class="alterarDados" v-model="email" placeholder="Alterar Email..."/>
    <input class="alterarDados" v-model="nome" placeholder="Alterar Nome..."/>
    <p class="pOfPassAtual">Palavra chave atual necessaria para efetuar mudanças</p>
    <input class="alterarDados" v-model="passwordAtual" placeholder="Palavra chave atual..."/>
    <button class="btnAlterarDados" v-on:click="alterarDados()">Alterar Dados</button><br />
    <router-link :to="{path: '/infouser'}" tag="button" class="btnAlterarDados">Voltar</router-link>
  </div>
</template>

<script>

import axios from "axios";
export default {
  name: "AlterarDadosUser",
  data() {
    return {
      allEmails: [],
      cliente: {},
      user: localStorage.getItem('user'),
      password: "",
      passwordConf: "",
      passwordAtual: "",
      email: "",
      nome: "",
      tries: 1
    }
  },
  mounted() {
    this.getClients();
    this.getAllEmails();
  },
  methods: {
    getClients() {
      axios({
        method: "get",
        url: `http://localhost:3000/cliente/` + this.user,
      }).then((response) => {
        this.cliente = response.data;
        
      })
    },
    getAllEmails() {
      axios({
        method: "get",
        url: `http://localhost:3000/allEmails`,
      }).then((response) => {
        for(var email of response.data) {
            this.allEmails.push(email.email);
        }
      })
    },
    alterarDados() {
        var existeEmail = false;

        if(this.passwordAtual == this.cliente.password) {
            if(this.password == this.passwordConf) {
                
                for(var em of this.allEmails) {
                    if(em == this.email) {
                        existeEmail = true;
                    }
                }
                if(existeEmail == false && this.email != "admin@ipvc.pt") {
                    
                    axios({
                        method: "put",
                        url: `http://localhost:3000/cliente/updateDados/` + this.user,
                        data: {
                            password: this.password,
                            nome: this.nome,
                            email: this.email,
                        }
                    }).then((response) => {
                        this.cliente = response.data;
                        window.alert("Dados atualizados com sucesso!");
                        this.$router.push('/infouser');
                    })
                    
                } else {
                    window.alert("Email indisponivel!");
                }         
            } else {
                window.alert("Nova palavra chave e confirmação não coincidem!");
            }
        } else {
            console.log(this.tries);
            window.alert("Palavra chave atual errada!");
        }
    }
  }
}
</script>

<style>

.alterarDados {
    width:20%;
    display: block;
    margin: 30px auto;
    padding: 10px;
    border-radius: 5px;
    color: white;
    background-color: rgb(48, 48, 48);
    font-size: 20px;
}

.h1Atuais {
    margin-top: 20px;
    margin-bottom: 20px;
}

.h1Novos {
    margin-top: 20px;
}

.pOfPassAtual {
    font-size: 18px;
}

.btnAlterarDados {
    width:10%;
    font-size: 25px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: rgb(48, 48, 48);
    color: white;
    
}
</style>