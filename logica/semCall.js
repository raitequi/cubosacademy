const finalizado = () => {
    console.log("Gah!!!!")
}

const contagemRegressiva = (valInicial) => { 
    for (i=valInicial; i>=0; i--) {
        console.log(i)
    }
    finalizado()
}

contagemRegressiva(100000) 