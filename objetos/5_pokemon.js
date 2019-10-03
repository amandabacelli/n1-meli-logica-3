// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".

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
        const array = ["FIGHT", "BAG", "RUN"]
        let rand = array[(Math.random()*array.length) | 0]
        console.log(rand)
    }

}
pokemon.qualEhEstePokemon ()
pokemon.qualNomeJapones ()
pokemon.saberVoar()
pokemon.action ()