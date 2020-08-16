const transformString = (texto, transformador) => {
    if (texto.length === 0 ) {
        console.log("Utilizar um texto maior")
    }

    let resultado = transformador(texto)
    resultado += '\n\n\n\n\n!'
    return resultado
}

const transformaE = (texto) => {
    let novoTexto = ''
    for(i=0; i<texto.length; i++) {
        if (texto[i] === "e" || texto[i] === "e") {
            novoTexto += 4
        } else {
            novoTexto += texto[i]
        }
    }

    return novoTexto
}
//const palavra = transformString("Teste", (texto) => texto)
const palavra = transformString("Teste", transformaE)
console.log(palavra)