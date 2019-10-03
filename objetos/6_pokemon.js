// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.


pokemon = {
    numeroNacional: 143,
    nome: "Snorlax",
    numeroJohto: 230,
    ev:"Munchlax",
    nomeJapones: "Kabigon",
    voar: false,
    
    qualEhEstePokemon: function () {
        console.log(`Vive dormindo, tem evolução ${pokemon.ev} qual é este pokemon? O pokemon é: ${pokemon.nome}`)
        
    },

    qualNomeJapones: function () {
        console.log(`Oi, meu nome é ${pokemon.nome} e meu nome japones é ${pokemon.nomeJapones}`)
        
    }, 
    saberVoar: function () {
        if (pokemon.voar == true){
            console.log(`To voaaaaaando!`)
        }else {
            console.log(`Desculpa, nao sei voar`)
        }
        
    },
    action: function () {
        const acao = ["FIGHT", "BAG", "RUN"]
        let rand = acao[(Math.random()*acao.length)]
        console.log(rand)
    },
    pergunta: function () {
       console.log(`O que o pokemon ${pokemon.nome} vai fazer? ${pokemon.action[rand]}`)
    }

}
pokemon.qualEhEstePokemon ()
pokemon.qualNomeJapones ()
pokemon.saberVoar()
pokemon.pergunta ()