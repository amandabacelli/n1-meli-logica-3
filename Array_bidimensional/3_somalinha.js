// 3 - Retorne o valor mais alto das somas entre o total de valors por linha, de uma array 4x4.
//const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]
// exemplo:
// 4 4 4 4
// 5 6 6 7
// 9 9 9 9
// Resultado esperado -> 36

const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]

let soma = [] //array para receber soma
for (let i = 0; i < arr4x4.length ; i++) {
    let linha = 0 //a linha que sera somada inicia em 0, pois ja temos os numeros
    for (let j = 0; j < arr4x4.length; j++) { 
       linha += arr4x4[i][j] //linha recebe o elemento i e j  da mesma posição
               
    }
    soma.push(linha) // acrescentar os elementos da linha na array vazia 
    console.log(soma)

    
}console.log("o valor mais alto entre as somas das linhas é: ", Math.max(...soma)) //quando eh array, tem que colocar os
//... na frente 

//=========================USANDO REDUCE==========================================

// const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]

// let arr = [] //array para receber soma
// for (let i = 0; i < arr4x4.length ; i++) {
//     let soma = arr4x4[i].reduce(function (a,b) {
//         return a+b
        
//     })
//     arr[i] = soma
// }
// console.log(Math.max(...arr))