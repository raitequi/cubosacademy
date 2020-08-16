//função eImpar recebe argumento numero, que faz... =>

const eImpar = (numero) => {
    //verificar se o tipo do parâmetro é número mesmo!!
    if (typeof numero !== 'number') {
        return false
    }
    if (numero % 2 !== 0) {
        return true
    } else {
        return false
    }
}
//chamando a função e recebendo NUMERO como parâmetro, declarado em argumentos, acima

console.log(eImpar(33));


const ePar = (numero) => {
    //verificar se o tipo do parâmetro é número mesmo!!
    if (typeof numero !== 'number') {
        return false
    }
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}
//chamando a função e recebendo NUMERO como parâmetro, declarado em argumentos, acima

console.log(ePar(22));