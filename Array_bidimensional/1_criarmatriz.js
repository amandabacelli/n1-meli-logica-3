// 1 - Usando um loop, crie uma matriz 5 x 5 cujos elementos são:
// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

const r = require("readline-sync")
let array = []


function matriz (linhas, colunas, inicial){
    let linha = []
    for (let i = 0; i <= linhas; i++) { //loop linha i=0 é a posição nao o numero q será recebido
        //o loop de fora ta mandando o loop de dentro repetir 5 vezes
        let coluna = []
        for (let j = 0; j <= colunas; j++) { // sempre será o loop da coluna
            coluna[j] = inicial
            inicial++

        }
        linha[i] = coluna
    }
    return linha
}
array= matriz(10,5, 0)
console.log(array)