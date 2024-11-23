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
            this.$emit('limpar-memoria');
        },
        iniciarJogo(jogadorVida, monstroVida) {
            this.$emit('update-stamina', jogadorVida, monstroVida);
        },
        ataque() {
            const jogadorAtaque = this.getRandomInt(5, 10);
            const monstroAtaque = this.getRandomInt(5, 15);
            const danoGeradoJogador = Math.max(0, this.jogadorVida - monstroAtaque);
            const danoGeradoMonstro = Math.max(0, this.monstroVida - jogadorAtaque);
            this.jogadorVida = danoGeradoJogador;
            this.monstroVida = danoGeradoMonstro;
            if (this.jogadorVida === 0 || this.monstroVida === 0) {
                this.start = false;
            }
            this.$emit('update-stamina', this.jogadorVida, this.monstroVida)
            this.$emit('update-ataque', 0, jogadorAtaque, monstroAtaque);
        },
        ataqueEspecial() {
            const jogadorAtaque = this.getRandomInt(5, 15);
            const monstroAtaque = this.getRandomInt(5, 10);
            const danoGeradoJogador = Math.max(0, this.jogadorVida - monstroAtaque);
            const danoGeradoMonstro = Math.max(0, this.monstroVida - jogadorAtaque);
            this.jogadorVida = danoGeradoJogador;
            this.monstroVida = danoGeradoMonstro;
            if (this.jogadorVida === 0 || this.monstroVida === 0) {
                this.start = false;
            }
            this.$emit('update-stamina', this.jogadorVida, this.monstroVida)
            this.$emit('update-ataque', 0, jogadorAtaque, monstroAtaque);
        },
        curar() {
            const jogadorVida = this.getRandomInt(5, 15);
            const monstroAtaque = this.getRandomInt(5, 10);
            const gerarCuraJogador = Math.max(0, (this.jogadorVida + jogadorVida) - monstroAtaque);
            const semDanoMonstro = Math.max(0, this.monstroVida);
            this.jogadorVida = gerarCuraJogador;
            this.monstroVida = semDanoMonstro;
            if (this.jogadorVida > 100) {
                this.jogadorVida = 100;
            }
            if (this.jogadorVida === 0) {
                this.start = false;
            }
            this.$emit('update-stamina', this.jogadorVida, this.monstroVida)
            this.$emit('update-ataque', jogadorVida, 0, monstroAtaque);
        },
        desistir() {
            this.start = false;
            const jogadorVida = this.jogadorVida; 
            const monstroVida = this.monstroVida; 
            this.$emit('update-stamina', jogadorVida, monstroVida)
            this.$emit('update-ataque', 0, 0, 0);
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