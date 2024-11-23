<!-- eslint-disable -->
<template>
  <div id="header">
    <div>
      <h2>Jogador</h2>
      <div class="barraJogador">
        <div :class="{ fullLife: staminaJogador.width <= 100, lifeAlmostEmpty: staminaJogador.width < 20 }" :style="barraJogador"></div>
      </div>
      <span align="center">{{ staminaJogador.width }}%</span>
    </div>
    <div>
      <h2>Monstro</h2>
      <div class="barraMonstro">
        <div :class="{ fullLife: staminaMonstro.width <= 100, lifeAlmostEmpty: staminaMonstro.width < 20 }" :style="barraMonstro"></div>
      </div>
      <span align="center">{{ staminaMonstro.width }}%</span>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
#header {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 91%;
  height: 300px;
  padding: 30px;
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

.fullLife {
  background-color: green;
}
.lifeAlmostEmpty {
  background-color: red;
}
</style>