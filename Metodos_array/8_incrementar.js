// 8- Dada a array const x = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array somando mais 2 de cada item e crie uma nova array com os resultados gerados.

const x = [23, 43, 63 ,73, 83, 93, 102]
let x2 = []

for (let i = 0; i < x.length; i++) {
     x2.push(x[i]+2)

}console.log(x2)