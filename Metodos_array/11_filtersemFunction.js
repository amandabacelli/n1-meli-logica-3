//2
// const palavrinhas = [
//   "bolacha",
//   "biscoito",
//   "bombom",
//   "bala",
//   "abestalhado",
//   "MASSA",
//   "pastilha"
// ]
// retorne palavras que tenham menos de 5 letras
// const novaArr = palavrinhas.filter(item => item.length < 5)
// console.log(novaArr)

const palavrinhas = ["bolacha", "biscoito", "bombom", "bala", "abestalhado", "MASSA", "pastilha"]
const palavrasMenores5 = palavrinhas.filter(item =>item.length<5)
console.log(palavrasMenores5)