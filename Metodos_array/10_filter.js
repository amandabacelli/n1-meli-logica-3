//1
// const numbers = [
//   1,
//   3,
//   4,
//   6,
//   8,
//   9,
//   56,
//   34,
//   23,
//   2,
//   89,
//   101,
//   320,
//   12,
//   13,
//   45,
//   40,
//   43,
//   88
// ]
// retorne numeros multiplos de 3
// retorne numeros multiplos de 3 e de 5

const numbers = [1, 3, 4, 6, 8, 9, 56, 34, 23, 2, 89, 101, 320, 12, 13, 45, 40, 43, 88]

let multiploTres = numbers.filter(function(element){
     return (element %3 == 0)
})
console.log(multiploTres)

let multiploTresCinco = numbers.filter(function(element){
     return (element %3 == 0 && element %5 == 0)
})
console.log(multiploTresCinco)