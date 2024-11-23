import Header from "./components/Header/index.vue";
import Controle from "./components/Controle/index.vue";
import Footer from "./components/Footer/index.vue";


export default {
  name: "App",
  components: {
    Header,
    Controle,
    Footer
  },
  data() {
    return {
      staminaJogador: {
        width: 100
      },
      staminaMonstro: {
        width: 100
      },
      forcaJogador: 0,
      ataqueJogador: 0,
      ataqueMonstro: 0,
      acoes: []
    }
  },
  methods: {
    updateStamina(jogadorStamina, monstroStamina) {
      this.staminaJogador.width = jogadorStamina
      this.staminaMonstro.width = monstroStamina
    },
    updateAtaque(forcaJogador, ataqueJogador, ataqueMonstro) {
      if (forcaJogador > 0) {
        this.acoes.push({ tipo: 'forca', valor: forcaJogador });
      }
      if (ataqueJogador > 0) {
        this.acoes.push({ tipo: 'ataqueJogador', valor: ataqueJogador });
      }
      if (ataqueMonstro > 0) {
        this.acoes.push({ tipo: 'ataqueMonstro', valor: ataqueMonstro });
      }
    },
    limparMemoria() {
      this.acoes = [];
    }
  }
};