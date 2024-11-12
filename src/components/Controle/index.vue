<!-- eslint-disable -->
<template>
  <div id="controle">
      <button :style="botaoInicial" type="button" v-if="!start" @click="botaoFuncional">INICIAR NOVO JOGO</button>
      <button type="button" v-if="start" @click="ataque">ATAQUE</button>
      <button type="button" v-if="start" @click="ataqueEspecial">ATAQUE ESPECIAL</button>
      <button type="button" v-if="start" @click="curar">CURAR</button>
      <button type="button" v-if="start" @click="desistir">DESISTIR</button>
  </div>
</template>
  
<script src="./index.js"></script>
  
<style scoped>
#controle {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 120px;
  box-shadow: 4px 4px 4px 4px #ccc;
}
button {
  width: 110px;
  height: 50px;
  font-size: 20px;
  box-shadow: 3px 3px 3px 3px #ccc;
  border: none;
  border-radius: 5px;
}
button:nth-child(1) {
  background-color: red;
  color: white;
}
button:nth-child(2) {
  background-color: rgba(197, 194, 1, 0.863);
  color: black;
  width: 200px;
}
button:nth-child(3) {
  background-color: rgb(0, 156, 0);
  color: white;
}
button:active {
  box-shadow: none;
  margin-bottom: 2px;
  margin-top: 4px;
}
</style>