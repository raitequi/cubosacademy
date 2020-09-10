const koa = require("koa")
const bodyparser = require("koa-bodyparser")

const server = new koa()

server.use(bodyparser())

const listaTarefas = [
    {
        titulo: "Jogar GTA",
        descricao: "GTA San Andreas 2020",
        concluida: false,
        deletada: false
    }
]

const obterLista = () => {
    const listaSemDeletados = []
    listaTarefas.forEach(tarefa => {
        if (tarefa.deletada === false) {
            listaSemDeletados.push(tarefa)
        }
    })
    return listaSemDeletados
}

const obterTarefa = (indice) => {
    const tarefa = listaTarefas[indice]
    if (tarefa) {
        return tarefa
    } else {
        return null
    }
}

const addTarefa = (tarefa) => {
    const novaTarefa = {
        "titulo": tarefa.titulo ? tarefa.titulo : '',
        "descricao": tarefa.descricao ? tarefa.descricao : '',
        "concluida": tarefa.concluida ? tarefa.concluida : false,
        "deletada": false,
    }
    listaTarefas.push(novaTarefa)
    return novaTarefa
}

server.use((ctx) => {
    if (ctx.url === '/tarefas') {
        if (ctx.method === 'GET') {
            ctx.body = obterLista()
        } else if (ctx.method === 'POST') {
                ctx.body = addTarefa(ctx.request.body) //bodyparser
        } else {
            ctx.status = 404
            ctx.body = 'Não encontrado!'
        }
    } else if (ctx.url.includes("/tarefas/")) {
            const quebra = ctx.url.split("/")
            if (quebra[1] === "tarefas") {
                const indice = quebra[2]
                if (indice) {
                    ctx.body = obterTarefa(indice)
                } else {
                    ctx.status = 404
                    ctx.body = 'Não encontrado!'
                }
            }
    
    } else {
        ctx.status = 404
        ctx.body = 'Não encontrado!'
    }
})

server.listen(8080, () => console.log("Servidor rodando na porta 8080"))