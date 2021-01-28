<template>
  <div class="comentarioDiv">
    <p>{{ comentario.comentario.nome }}</p>
    <div class="caixaComentario">
      <p>{{ comentario.comentario }}</p>
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
  font-size: 15px;
  font-family: Kenyan;
  width: 200px;
  height: fit-content;
}
.caixaComentario{
    width: 200px;
    height: fit-content;
    background-color: black;
    border: 2px white;
    border-radius: 10px;
}
</style>
