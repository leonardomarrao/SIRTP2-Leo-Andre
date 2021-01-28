<template>
  <div class="comentarios">
    <div class="comentar">
      <form action="/produto/:id" method="post">
        <label for="comentario" class="textoAntesComentar"
          >Adicionar comentário:</label
        >
        <input
          type="text"
          id="comentario"
          name="comentario"
          class="inputsComentarios"
        /><br /><br />
        <label for="nota" class="textoAntesComentar">Nota de 0 a 10:</label>
        <input
          type="number"
          id="nota"
          name="nota"
          class="inputsComentarios"
          min="0"
          max="10"
        /><br /><br />
        <input
          type="submit"
          id="btnComentar"
          value="Submit"
          v-on:click="insertComentary()"
          maxlength="500"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comentar",
  data() {
    return {
      user: localStorage.getItem('user')
    };
  },
};
</script>

<style>
.comentar {
  font-family: Kenyan;
}

#comentario {
  height: 100px;
  width: 500px;
  font-size: 20px;
}

.inputsComentarios {
  font-family: Kenyan;
  background-color: black;
  color: white;
}

#nota {
  font-size: 30px;
  margin-right: 370px;
  width: 60px;
}

.textoAntesComentar {
  color: white;
  padding-right: 15px;
  font-size: 30px;
}

#btnComentar {
  font-size: 40px;

  border-radius: 5px;
  margin-top: 10px;

  transform: translate(-50%);
  cursor: pointer;
  background-color: rgb(48, 48, 48);
  color: white;
}
</style>
