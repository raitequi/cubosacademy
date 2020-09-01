const caraOuCoroa = () => {

    const valor = Math.floor(Math.random() * 100)
    console.log(valor)

    return (valor <= 50) ? 'cara' : 'coroa' //substituindo if/else
}

console.log(caraOuCoroa())
console.log(caraOuCoroa())
console.log(caraOuCoroa())