<!-- eslint-disable -->
<template>
  <div id="header">
    <div>
      <h2>Jogador</h2>
      <div class="barraJogador">
        <div class="vidaInicio" :class="barraClasse(staminaJogador.width)" :style="{ width: staminaJogador.width }"></div>
      </div>
      <span align="center">{{ staminaJogador.width }}</span>
    </div>
    <div>
      <h2>Monstro</h2>
      <div class="barraMonstro">
        <div class="vidaInicio" :class="barraClasse(staminaMonstro.width)" :style="{ width: staminaMonstro.width }"></div>
      </div>
      <span align="center">{{ staminaMonstro.width }}</span>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
#header {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  height: 300px;
  box-shadow: 4px 4px 4px 4px #ccc;
}
h2 {
  font-size: 40px;
}
span {
  font-size: 20px;
  font-weight: bold;
}
.barraJogador {
  display: flex;
  width: 600px;
  height: 30px;
  border: 1px solid black;
  margin-top: 20px;
}
.barraMonstro {
  display: flex;
  width: 600px;
  height: 30px;
  border: 1px solid black;
  margin-top: 20px;
}
.vidaInicio {
  background-color: green !important;
}
.vidaCheia {
  background-color: green !important;
}
.vidaNoFim {
  background-color: red !important;
}
.vidaNoFim2 {
  background-color: rgb(255, 8, 8) !important;
}
</style>