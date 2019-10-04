//9 Faça uma função construtora de pokemon

// numeroNacional: 143,
//     nome: "Snorlax",
//     numeroJohto: 230,
//     ev:"Munchlax",
//     nomeJapones: "Kabigon",
//     voar: false,
function Pokemon(nome, nomeJapa, evolucao){ //sao os parametros, não tem o mesmo nome que a propriedade 
    this.nome = nome
    this.nomeJapa = nomeJapa
    this.evolucao = evolucao

}
//instanciar a função construtora

const pokemon1 = new Pokemon ('Snorlax', 'Kabigon', 'Munchlax')
//criar um metodo na função para que eu possa ter acesso à ela dentro dos objetos criados
Pokemon.prototype.jogarBola = function () {
    console.log("exemplo")
    
}
console.log(pokemon1.nome)

    