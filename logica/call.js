const finalizado = () => {
    console.log("Gah!!!!")
}

const contagemRegressiva = (valInicial, aoFim) => { //ao fim: função
    for (i=valInicial; i>=0; i--) {
        console.log(i)
    }
    aoFim()
}

contagemRegressiva(100000, finalizado) //aoFim chama a função finalizado. Isso é um callback