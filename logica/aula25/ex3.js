const arr = ['ana', 'Junior', 'pedro', 'Claudia', 'Adriana', 'Álvaro']

const maiusculas = arr.map(x => {
    return x[0].toUpperCase() + x.slice(1) //x = nome, [0] = primeira letra do nome, x.slice(1) = pega o nome da segunda letra em diante
})

maiusculas.sort((a,b) =>b.localeCompare(a)) //para ordenar Álvaro, com acento. Só inverter para colocar em ordem cresc/decresc

console.log(maiusculas)