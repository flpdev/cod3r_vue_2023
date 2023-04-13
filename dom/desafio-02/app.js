new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlertaClick() {
            alert('O Botão foi clicado')
        },
        atualizaValor(event) {
            this.valor = event.target.value
        },
        atualizaValorEnter(event) {
            this.valor = event.target.value
        }
    }
})