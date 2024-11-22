
export default {
    name: 'header',
    components: {},
    props: {
        staminaJogador: Object,
        staminaMonstro: Object
    },
    data() {
        return {
            cor: '',
            backgroundColor: '',
            staminaJogador: { width: 100 },
            staminaMonstro: { width: 100 }
        }
    },
    methods: {},
    computed: {
        barraJogador() {
            return {
                width: this.staminaJogador.width + '%',
                backgroundColor: this.backgroundColor
            }
        },
        barraMonstro() {
            return {
                width: this.staminaMonstro.width + '%',
                backgroundColor: this.backgroundColor
            }
        }
    },
    watch: {},

}