const contagemRegressiva = (valInicial, aoFim) => {
    for (i=valInicial; i>=0; i--) {
        console.log(i)
    }
    aoFim()
}

contagemRegressiva(100000, () => {
    console.log("Gah!!!!")
})