const caraOuCoroa = () => {

    const valor = Math.floor(Math.random() * 100)
    console.log(valor)

    if (valor <= 50) {
        return 'cara'
    } else {
        return 'coroa'
    }
}

console.log(caraOuCoroa())
console.log(caraOuCoroa())
console.log(caraOuCoroa())