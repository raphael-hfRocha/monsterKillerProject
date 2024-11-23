export default {
    name: 'footer',
    props: {
        acoes: {
            type: Array,
            required: true
        }
    },
    components: {},
    data: {},
    methods: {},
    computed: {
        acoesReversas() {
            return [...this.acoes].reverse();
        }
    },
    watch: {}
}