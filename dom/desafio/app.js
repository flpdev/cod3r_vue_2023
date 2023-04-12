var desafio = new Vue({
    el: "#desafio",
    data: {
        nome: 'Felipe Moreira',
        idade: 34,
        linkImage: 'https://thebilgebucket.files.wordpress.com/2012/02/foo_was_here.jpg'
    },
    methods: {
        multiplicaIdade: function () {
            return this.idade * 3
        },
        numeroRandomico: function () {
            return Math.random()
        }
    }
})