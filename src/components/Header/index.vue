<!-- eslint-disable -->
<template>
  <div id="header">
    <div>
      <h2>Jogador</h2>
      <div class="barraJogador">
        <div class="vidaCheia" :class="{ vidaCheia: staminaJogador.width >= '20%' && staminaMonstro.width === '100%', vidaNoFim: staminaJogador.width < '20%' }" :style="{ width: staminaJogador.width }"></div>
      </div>
      <span align="center">{{ staminaJogador.width }}</span>
    </div>
    <div>
      <h2>Monstro</h2>
      <div class="barraMonstro">
        <div class="vidaCheia" :class="{ vidaCheia: staminaMonstro.width >= '20%' && staminaMonstro.width === '100%', vidaNoFim: staminaMonstro.width < '20%' }" :style="{ width: staminaMonstro.width }"></div>
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
.vidaCheia {
  background-color: green;
}
.vidaNoFim {
  background-color: red;
}
</style>