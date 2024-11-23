<!-- eslint-disable -->
<template>
  <div id="footer">
    <div v-for="(acao, index) in acoesReversas" :key="index">
      <div
        class="jogador"
        v-if="acao.tipo === 'ataqueJogador' || acao.tipo === 'forca'"
      >
        <h2 v-if="acao.tipo === 'forca'">
          O JOGADOR GANHOU FORÇA DE {{ acao.valor }}
        </h2>
        <h2 v-if="acao.tipo === 'ataqueJogador'">
          O JOGADOR ATINGIU O MONSTRO COM {{ acao.valor }} DE DANO
        </h2>
      </div>
      <div class="monstro" v-if="acao.tipo === 'ataqueMonstro'">
        <h2>O MONSTRO ATINGIU O JOGADOR COM {{ acao.valor }} DE DANO</h2>
      </div>
    </div>
  </div>
</template>
  
<script src="./index.js"></script>
  
<style scoped>
#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  flex-wrap: wrap;
  width: auto;
  height: auto;
  box-shadow: 4px 4px 4px 4px #ccc;
}
.jogador {
  display: flex;
  justify-content: center;
  width: 1690px;
  height: 60px;
  flex-wrap: wrap;
  text-align: center;
  background-color: #5e86adea;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
}
.monstro {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1690px;
  height: 60px;
  text-align: center;
  background-color: #da5c6d;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
}
</style>