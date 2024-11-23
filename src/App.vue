<!-- eslint-disabled -->
<template>
  <div id="app">
    <header>
      <Header
        :staminaJogador="staminaJogador"
        :staminaMonstro="staminaMonstro"
      />
      <template v-if="staminaJogador.width === 0 || staminaMonstro.width === 0">
        <div id="resultado">
          <h2
            style="color: red"
            v-show="staminaJogador.width === 0"
            :hidden="staminaMonstro.width === 0"
          >
            Você perdeu!
          </h2>
          <h2
            style="color: green"
            v-show="staminaMonstro.width === 0"
            :hidden="staminaJogador.width === 0"
          >
            Você ganhou!
          </h2>
          <h2
            style="color: blue"
            v-show="staminaJogador.width === 0 && staminaMonstro.width === 0"
          >
            Empate!
          </h2>
        </div>
      </template>
    </header>
    <main>
      <Controle
        @update-stamina="updateStamina"
        @update-ataque="updateAtaque"
        @limpar-memoria="limparMemoria"
        ref="controle"
      />
    </main>
    <footer>
      <Footer
        v-show="staminaJogador.width !== 100 && staminaMonstro.width !== 100"
        :acoes="acoes"
      />
    </footer>
  </div>
</template>

<script src="./App.js"></script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#resultado {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 120px;
  margin-top: 20px;
  box-shadow: 4px 4px 4px 4px #ccc;
}
#resultado h2 {
  font-size: 32px;
}
header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 5%;
}
main {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
