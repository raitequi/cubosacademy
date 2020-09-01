const caraOuCoroa = (valor) => {

    if (valor<0 || valor >100) {
        return 'Valor inválido'
    }

    if (valor <= 50) {
        return 'cara'
    } else {
        return 'coroa'
    }
}

console.log(caraOuCoroa(25))
console.log(caraOuCoroa(55))
console.log(caraOuCoroa(110))