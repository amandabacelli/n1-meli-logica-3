// 1- Crie uma função construtora para Terreno, cada terreno deve ter:
// largura, comprimento, area(largura x comprimento)

function Terreno (largura, comprimento) {
    this.largura = largura
    this.comprimento = comprimento
    this.area = comprimento*largura
}
Terreno.prototype.calcularPreco = function () {
    this.preco = this.area*200
}

Terreno.prototype.mostrarInfos = function () {
   console.log(`a área é ${this.area} e preco ${this.preco}`)
}
const t1 = new Terreno(4,2)
const t2 = new Terreno(10,2)
const t3 = new Terreno(14,7)
const t4 = new Terreno(23,12)
const t5 = new Terreno(30 ,10)

t1.calcularPreco()
t2.calcularPreco()
t3.calcularPreco()
t4.calcularPreco()
t5.calcularPreco()

const terrenos = []
terrenos.push(t1,t2,t3,t4,t5)
//console.log(terrenos)
// console.log(terrenos[terrenos.length-1])
// console.log(terrenos[2].area)

// for(const item of terrenos){ //item é item da array, for in vai mostrar as propriedades do objeto
//     console.log(item.mostrarInfos())
// }

function ordenar (arrTerrenos){
    const ordenados = arrTerrenos.sort(function(a,b){
        return a.preco - b.preco
    })
    console.log(ordenados[0], ordenados[ordenados.length -1])
}
ordenar(terrenos) //tem que colocar a array que a função será executada

// 2 crie métodos usando o prototype, eles devem ser:
// - calcularPreco -> que vai ser a area x 1000 reais.
// - mostrarInfos -> que mostrar a area e o preço do terreno.

// 3 - Crie 5 instancias do terreno, usando o operador new. ex: const t1 = new Terreno(arg1, arg2)
// 4 - use a função calcular preco para que todas as instancias tenham seus precos.

// 5 - crie uma array vazia chamada terrenos.
// 6 - insira as instancias criadas(que os precos já tenham sido calculados) na array terrrenos.

// 7 - Imprima na tela o último terreno da array terrenos.
// 8 - Imprima a area do terceiro item da array terrenos
// 9 - Usando um loop, execute o método mostrarInfos de todos os terrenos.

// 10 - Crie uma função que vai receber a array de objetos e vai ordenar a lista do mais barato para o mais caro.
// 11 - Crie uma função que Imprima o mais barato
// 12 - Crie uma função que Imprima o mais caro.
