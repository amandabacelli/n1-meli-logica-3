// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `sabe_voar`
// (ou algo do tipo) e defina
// ela como `true` ou `false`.

// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".

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
        
    }


}
pokemon.qualEhEstePokemon ()
pokemon.qualNomeJapones ()
pokemon.saberVoar()