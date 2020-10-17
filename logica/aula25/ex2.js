const arr = ['ana', 'Junior', 'pedro', 'Claudia', 'Adriana']

const maiusculas = arr.map(x => {
    return x[0].toUpperCase() + x.slice(1) //x = nome, [0] = primeira letra do nome, x.slice(1) = pega o nome da segunda letra em diante
})

maiusculas.sort()

console.log(maiusculas)