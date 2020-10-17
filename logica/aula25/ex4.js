const arr = [
    {   
        nome: 'Ana',
        idade: 55
    },

    {
        nome: 'Junior',
        idade: 65
    },
    {
        nome: 'Pedro',
        idade: 23
    },
    {
        nome: 'Claudia',
        idade: 18
    },
    {
        nome: 'Adriana',
        idade: 32
    },
    {
        nome: 'Álvaro',
        idade: 43
    }
]

arr.sort((a,b) => {
    if (a.idade < b.idade) {
        return -1
    } else if (a.idade > b.idade) {
        return 1
    } else {
        return a.nome.localeCompare(b.nome) //caso empate de idades, ordenar por nome
    }
})

console.log(arr)