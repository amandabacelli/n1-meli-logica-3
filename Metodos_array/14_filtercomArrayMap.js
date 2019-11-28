//5 -

// retore a mulher que tiver o user = 238
// retorne o nome das mulheres que gostam de estudar

const mulheres = [
  {
    user: 234,
    name: "Marcia",
    idade: 40,
    hobbies: ["estudar", "comer", "falar"]
  },
  {
    user: 235,
    name: "Lorena",
    idade: 20,
    hobbies: ["dançar", "assistir tv", "estudar"]
  },
  {
    user: 236,
    name: "Patricia",
    idade: 24,
    hobbies: ["correr", "acampar", "surfar"]
  },
  {
    user: 237,
    name: "Mariana",
    idade: 15,
    hobbies: ["skate", "bicicleta", "break dance"]
  },
  {
    user: 238,
    name: "Isis",
    idade: 34,
    hobbies: ["ler", "estudar", "discutir"]
  },
  {
    user: 239,
    name: "Pietra",
    idade: 23,
    hobbies: ["jogar dominó", "sinuca", "cartas"]
  }
]

// let user = mulheres.find(element => element.user == 238)
// console.log(user)


let nome = mulheres.filter(element => element.hobbies.indexOf("estudar")> -1)

nome.map(element => { //para printar somente os nomes faz uma array nova
  console.log(element.name)
})
