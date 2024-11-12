/* eslint-disable */
export default {
    name: 'controle',
    components: {},
    data() {
        return {
            start: false,
            backgroundColor: '',
            width: '',
            color: ''
        };
    },
    methods: {
        botaoFuncional() {
            this.start = !this.start
            console.log(this.start)
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