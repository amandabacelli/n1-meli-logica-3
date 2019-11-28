//3
// const numbers = [3, 4, 5, 6, 6, 7]
// // itere pela array modificando todos os items, multiplicando eles por 3.
// // depois prite quantos numeros são maiores que 10
// // depois quantos são menores que 10.
// // printe o numero menor que 10.

const numbers = [3, 4, 5, 6, 6, 7]

let multipTres = numbers.map(function(item){
    return item*3
})
console.log("numeros multiplos de 3", multipTres)

let maioresDez = numbers.filter(item => item >10)

console.log("quantidade de numeros maiores que 10", maioresDez.length)

let menoresDez = numbers.filter(item => item <10)

console.log("quantidade de numeros menores que 10", menoresDez.length)

let numMenor10 = numbers.filter(item => item < 10)
console.log("numeros menores que 10", numMenor10)
