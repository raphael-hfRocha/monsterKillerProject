export default {
    name: 'header',
    components: {},
    data() {
        return {
            vidaJogador: 100,
            vidaMonstro: 100,
        }
    },
    methods: {},
    computed: {
        staminaJogador() {
            return {
                width: this.vidaJogador + '%'
            }
        },
        staminaMonstro() {
            return {
                width: this.vidaMonstro + '%'
            }
        }
    },
    watch: {}
}