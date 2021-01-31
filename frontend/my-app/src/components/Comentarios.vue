<template>

  <div class="comentarioDiv">
    <p id="usernameCom">{{ comentario.username }}</p>
    <div class="caixaComentario">
      <p id="actualComentario">{{ comentario.avaliacao.comentario }}. Nota dada pelo utilizador:  {{comentario.avaliacao.classificacao}}/10</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "Comentarios",
  props: {
    comentario: {
      type: Object,
    },
  },
};
</script>

<style>


.comentarioDiv {
  font-size: 25px;
  font-family: Kenyan;
  width: 200px;
  height: fit-content;
  color:white;
  margin-left: 10px;
  border: 20px white;
}
.caixaComentario{
    
    text-align: left;
    width: 780px;
    height: fit-content;
    background-color: rgb(31, 30, 30);
    border: 2px white;
}

#actualComentario {
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 10px;
    color:white;
    font-size: 18px;
}

#usernameCom{
    margin-right: 170px;
    font-size: 20px;
}

</style>
