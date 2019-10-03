//7- const cacaPalavras = [
//   ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
//   ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
//   ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
//   ["a", "w", "e", "l", "e", "f", "a", "n", "t", "e"],
//   ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
//   ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
//   ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
//   ["c", "a", "s", "a", "t", "y", "u", "u", "i", "r"],
//   ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
//   ["a", "w", "e", "r", "e", "d", "e", "u", "i", "r"],
//   ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"]
// ]

// const palavras = ["elefante", "casa", "rede"]

// ache as palavras da array palavras na array cacaPalavras e diga em qual linha e em qual coluna
// elas estao.
// Ex: a palavra elefante está na linha 4 e começa na coluna 3.

const cacaPalavras = [
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "l", "e", "f", "a", "n", "t", "e"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["c", "a", "s", "a", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"],
    ["a", "w", "e", "r", "e", "d", "e", "u", "i", "r"],
    ["a", "w", "e", "r", "t", "y", "u", "u", "i", "r"]
]
const palavras = ["elefante", "casa", "rede"]


for (let i = 0; i<cacaPalavras.length; i++) {
    cacaPalavras[i] = cacaPalavras[i].join("") //tira o aspas e faz uma string
    for(let j = 0; j<palavras.length; j++){

       if(cacaPalavras[i].indexOf(palavras[j]) > -1){
           console.log(`A palavra ${palavras [j]} está na linha ${i+1} 
           e começa na coluna ${cacaPalavras[i].indexOf(palavras[j] + 1)}`) //quando acha, o indexof retorna o index que a 
           //a palavra retorna
       } 
        
    }
 
    
}