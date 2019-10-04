// 7.
// Printe todas as propriedades
// do seu pokemon no console.

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
        let rand = acao[Math.floor(Math.random()*acao.length)]
        return rand
    },
    pergunta: function () {
       console.log(`O que o pokemon ${pokemon.nome} vai fazer? ${pokemon.action()}`)
    }
    
}
for(const key in pokemon) {
    console.log(key)
}
