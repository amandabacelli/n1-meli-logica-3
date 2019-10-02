// 5 - Agora recebemos, alguns valores em string. Porém a nossa tabela no banco só aceita
// valores lowercase. Crie uma função que checa em uma array bidimensional se todas as strings
// estão obedecendo as regras da tabela. E caso nao estejam, modifique a string para que possam ser
// salvas no banco.
// const dados = [
//   ["Antonia Maria", "ar@gol.com", "Engenheira"],
//   ["Joana Maranhão", "ar@gol.com", "Engenheira de software"],
//   ["Juliana Paes", "argh@gol.com", "Advogada"],
//   ["mariana DA SILVA", "mariana@gmail.com", "MEDICA"],
//   ["MARINA BATISTA", "marina@gol.com", "professora"],
//   ["Antonia Maria", "ari@gol.com", "cientista"]
// 

const dados = [
  ["Antonia Maria", "ar@gol.com", "Engenheira"],
  ["Joana Maranhão", "ar@gol.com", "Engenheira de software"],
  ["Juliana Paes", "argh@gol.com", "Advogada"],
  ["mariana DA SILVA", "mariana@gmail.com", "MEDICA"],
  ["MARINA BATISTA", "marina@gol.com", "professora"],
  ["Antonia Maria", "ari@gol.com", "cientista"]
]

let dadosOrganizados = []
for(i=0; i<dados.length; i++){
    dadosOrganizados.push(dados[i].join().toLowerCase().split(',')) //eu insiro os itens de dados linha a linha
    //depois eu transformo em string (join) . transformar o texto em caixa baixa (tolowercase) . transformar as strings em
    //array novamente
}
console.log(dadosOrganizados)