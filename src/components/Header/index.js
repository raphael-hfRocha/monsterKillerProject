export default {
    name: 'header',
    components: {},
    props: {
        staminaJogador: Object,
        staminaMonstro: Object
    },
    data() {
        return {
            vidaCheia: 'vidaCheia',
            vidaNoFim: 'vidaNoFim',
            vidaNoFim2: 'vidaNoFim2'
        }
    },
    methods: {
        barraClasse(vida) {
          if (vida <= '100%') {
            return this.vidaCheia;
          } else if (vida < '20%') {
            return this.vidaNoFim;
          } else if (vida < '10%') {
            return this.vidaNoFim2;
          }
        }
      },
    computed: {
    },
    watch: {}
}