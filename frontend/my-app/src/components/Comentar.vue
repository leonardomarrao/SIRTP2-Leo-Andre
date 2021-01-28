<template>
  <div class="comentarios">
    <div class="comentar">
        <label for="comentario" class="textoAntesComentar"
          >Adicionar comentário:</label>
        <input
          type="text"
          id="comentarioInserido"
          name="comentarioInserido"
          v-model="comentarioInserido"
          maxlength="500"
          class="inputsComentarios"
        /><br /><br />
        <label for="nota" class="textoAntesComentar">Nota de 0 a 10:</label>
        <input
          type="number"
          id="nota"
          v-model="nota"
          class="inputsComentarios"
          min="0"
          max="10"
        /><br /><br />
        <input
          type="submit"
          id="btnComentar"
          value="Inserir Comentario"
          v-on:click="insertCommentary()"
        />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Comentar",
  data() {
    return {
      user: localStorage.getItem('user'),
      idcli: localStorage.getItem('id'),
      nota: '',
      comentarioInserido: '',
      idprodPagina: this.$route.params.id
    };
  },
  methods:{
    insertCommentary(){
      var idprod = this.$route.params.id;
      axios({
        method: "post",
        url: `http://localhost:3000/avaliacao/insertAvaliacao`,
        data:{
          idcli: this.idcli,
          idpro: idprod,
          classificacao: this.nota,
          comentario: this.comentarioInserido,
        }
      }).then((response) => {
        this.listaComentarios = response.data;
        console.log(this.listaComentarios);
        window.location.href = '/produto/'+idprod;
      })
    }
  }
};
</script>

<style>
.comentar {
  font-family: Kenyan;
}

#comentarioInserido {
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
