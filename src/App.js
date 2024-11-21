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
        width: '100%'
      },
      staminaMonstro: {
        width: '100%'
      }
    }
  },
  methods: {
    updateStamina(jogadorStamina, monstroStamina) {
      this.staminaJogador.width = jogadorStamina + '%'
      this.staminaMonstro.width = monstroStamina + '%'
    }
  }
};