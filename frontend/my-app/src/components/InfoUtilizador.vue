<template>
    <div class="fundoInfo">
    <p class="tituloUT">Informações do Utilizador</p><br>
    <p class="nomeInfo">Nome: {{cliente.nome}}</p>
    <p class="emailInfo">Email: {{cliente.email}}</p>
    <p class="usernameInfo">Username: {{cliente.username}}</p>
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
}
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
    
    
}

.nomeInfo


.tituloUT {
    font-size: 25px;
}

</style>