/* eslint-disable */
export default {
    name: 'controle',
    components: {},
    data() {
        return {
            start: false,
            backgroundColor: '',
            width: '',
            color: '',
            jogadorVida: 0,
            monstroVida: 0
        };
    },
    methods: {
        botaoFuncional() {
            this.start = !this.start;
            this.jogadorVida = 100;
            this.monstroVida = 100;
            this.iniciarJogo(this.jogadorVida, this.monstroVida);
        },
        iniciarJogo(jogadorVida, monstroVida) {
            this.$emit('update-stamina', jogadorVida, monstroVida);
        },
        ataque() {
            const jogadorAtaque = this.getRandomInt(5, 10);
            const monstroAtaque = this.getRandomInt(5, 15);
            this.jogadorVida = Math.max(0, this.jogadorVida - monstroAtaque);
            this.monstroVida = Math.max(0, this.monstroVida - jogadorAtaque);
            if (this.jogadorVida === 0 || this.monstroVida === 0) {
                this.start = false;
            }
            this.$emit('update-stamina', this.jogadorVida, this.monstroVida)
        },
        ataqueEspecial() {
            const jogadorAtaque = this.getRandomInt(5, 15);
            const monstroAtaque = this.getRandomInt(5, 10);
            this.jogadorVida = Math.max(0, this.jogadorVida - monstroAtaque);
            this.monstroVida = Math.max(0, this.monstroVida - jogadorAtaque);
            if (this.jogadorVida === 0 || this.monstroVida === 0) {
                this.start = false;
            }
            this.$emit('update-stamina', this.jogadorVida, this.monstroVida)
        },
        curar() {
            const jogadorVida = this.getRandomInt(5, 15);
            const monstroAtaque = this.getRandomInt(5, 10);
            this.jogadorVida = Math.max(0, (this.jogadorVida + jogadorVida) - monstroAtaque);
            this.monstroVida = Math.max(0, this.monstroVida);
            if (this.jogadorVida > 100) {
                this.jogadorVida = 100;
            }
            if (this.jogadorVida === 0) {
                this.start = false;
            }
            this.$emit('update-stamina', this.jogadorVida, this.monstroVida)
        },
        desistir() {
            this.start = false;
        },
        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },
    computed: {
        botaoInicial() {
            return {
                backgroundColor: 'rgba(47, 0, 255, 0.63)',
                width: '220px',
                color: 'white'
            }
        }
    },
    watch: {
    }
}