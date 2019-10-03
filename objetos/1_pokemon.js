// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método

pokemon = {
    numeroNacional: 143,
    nome: "Snorlax",
    numeroJohto: 230,
    ev:"Munchlax",
    qualEhEstePokemon: function () {
        console.log(`Vive dormindo, tem evolução ${pokemon.ev} qual é este pokemon? O pokemon é: ${pokemon.nome}`)
        
    }

}
pokemon.qualEhEstePokemon()