const tarefa = () => {
    console.log("Obrigado por esperar 3 segundos")
}

console.log("Aguarde...")

const id = setInterval(tarefa, 3000) //tempo em ms

setTimeout(() => {
    clearInterval(id)
}, 9010)

