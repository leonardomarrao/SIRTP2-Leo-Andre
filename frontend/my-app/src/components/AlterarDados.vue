<template>
   <div class="bg-modal">
       <div class="modal-content">
           <div class="close">+</div>
           <form action="/Home" method="get">
        <input class="alterarPass" v-model="password" type="password" placeholder="Alterar palavra chave..."/>
        <input class="alterarEmail" v-model="email" placeholder="Alterar Email..."/>
        <input class="alterarNome" v-model="nome" placeholder="AlterarNome..."/>
        <input class="btnregistar" type="submit" value="Alterar Dados"/><br />
           </form>
       </div>
   </div>
</template>

<script>
export default {
    name: "Login",
    data() {
    return {
      users: [],
      password: "",
      email: "",
      nome: ""
    };
  },
}
</script>

<style>
.bg-modal{

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
}

.modal-content{
    width: 300px;
    height: 500px;
    background-color: white;
    border-radius: 4px;
    text-align:center;
    padding: 20px;
    position: relative;
}

input {
    width:50%;
    display: block;
    margin: 15px auto;
}

.close{
    position: absolute;
    top: 0;
    font-size: 42px;
    transform: rotate(45deg);
    cursor:pointer;
}
</style>