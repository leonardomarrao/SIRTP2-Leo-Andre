<template>
  <div class="fundoInfo">
    <p class="tituloUT">Informações do Utilizador</p>
    <br />
    <p class="nomeInfo">Nome: {{ cliente.nome }}</p>
    <p class="emailInfo">Email: {{ cliente.email }}</p>
    <p class="usernameInfo">Username: {{ cliente.username }}</p>
    <br />
      <input
        class="btnlogin"
        v-on:click="alterarDados()"
        type="submit"
        value="Alterar dados"
      /><br />
  </div>
</template>

<script>
export default {
  name: "InfoUtilizador",
  props: {
    cliente: {
      type: Object,
    },
  },
};
</script>

<style>
.fundoInfo {
  background-color: rgba(78, 75, 75, 0.473);
  height: 150px;
  width: 300px;
  color: white;
  font-family: Kenyan;
  padding: 10px;
  text-align: left;
  font-size: 20px;
  margin: auto;
  margin-top: 100px;
}

.nomeInfo .tituloUT {
  font-size: 25px;
}

.btnlogin {
  font-size: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  background-color: rgb(48, 48, 48);
  color: white;
  font-family: Kenyan;
}
</style>
