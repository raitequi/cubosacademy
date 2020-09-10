const fs = require('fs')
const tabela =[]

fs.readFile('./brasileirao.txt', (err, data) => {
    if (err) throw err
    const jogosTexto = data.toString().split('\n')

    const jogos = []

    jogosTexto.forEach(linha => {
        const jogo = linha.split('\t')
        const objeto = {
            timeA: jogo[0],
            timeB: jogo[4],
            golsA: parseInt(jogo[1]), //transformar string em numero para fins de comparação
            golsB: parseInt(jogo[3])  //transformar string em numero para fins de comparação
        }
        jogos.push(objeto)
    })

    //console.log(jogos) //debug

    jogos.forEach((jogo) => {
        if (jogo.golsA === jogo.golsB) {
            mudarPontuacao(jogo.timeA, 1)
            mudarPontuacao(jogo.timeB, 1)
        } else if (jogo.golsA > jogo.golsB) {
            mudarPontuacao(jogo.timeA, 3)
            mudarPontuacao(jogo.timeB, 0)
        } else {  
            mudarPontuacao(jogo.timeA, 0)
            mudarPontuacao(jogo.timeB, 3)
        }
    })

    console.log(tabela)
})

const mudarPontuacao = (time, pontos) => {
    let encontrado = false
    tabela.forEach(timeTabela => {
        if (timeTabela.time === time) {
            timeTabela.jogos++
            timeTabela.pontos += pontos
            encontrado = true
        }
    })

    if (!encontrado) {
        tabela.push({
            time: time,
            jogos: 1,
            pontos: pontos
        })
    }
}