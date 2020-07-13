new Vue({
    el: '#desafio',
    data: {
        nome: 'Gustavo',
        idade: '26',
        foto: 'https://avatars3.githubusercontent.com/u/50716023?s=400&u=4af83abca000a2a4d6003b6cbeba47272f4dee91&v=4'
    },
    methods: { 
        idadextres: function(){
            return this.idade*3
        },
        randomico: function(){
            return Math.random(0,1)
        }

    }

})
