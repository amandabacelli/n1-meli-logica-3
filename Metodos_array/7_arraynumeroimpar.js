// 7- Crie um Array de 10 valores, apenas com Números Ímpares.
// depois imprima os valores na tela

let i
let cont = 0
let num = []
for (i = 1; cont < 10 ; i++) {
    if (i %2==1){
        num.push(i)
        cont++
    }
    
}console.log(num)