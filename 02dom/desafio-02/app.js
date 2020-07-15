new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('Alerta')
        },
        armazenamento(event){
            this.valor = event.target.value
        }
    }
})