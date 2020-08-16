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
        if (texto[i] === "E" || texto[i] === "e") {
            novoTexto += 3
        }
        else if (texto[i] === "A" || texto[i] === "a") {
            novoTexto += 4
        }
        else if (texto[i] === "I" || texto[i] === "i") {
            novoTexto += 1
        }
        else if (texto[i] === "O" || texto[i] === "o") {
            novoTexto += 0
        }
        else {
            novoTexto += texto[i]
        }
    }

    return novoTexto
}
//const palavra = transformString("Teste", (texto) => texto)
const palavra = transformString("Lorem ipsum dolor sit amet", transformaE)
console.log(palavra)