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

const delTarefa = (indice) => {
    const tarefa = obterTarefa(indice)
    if (tarefa) {
       listaTarefas.splice(indice, 1)
       return true
    } else {
        return false
    }
}

const atualizarTarefa = (indice, estado) => {
    const tarefa = obterTarefa(indice)
    const tarefaAtualizada = {
        titulo: tarefa.titulo,
        descricao: tarefa.descricao,
        concluida: estado,
        deletada: tarefa.deletada
    }

    if (tarefa) {
        listaTarefas.splice(indice, 1, tarefaAtualizada)
        return tarefaAtualizada
     } else {
         return false
     }
}

server.use((ctx) => {
    if (ctx.url === '/tarefas') {
        if (ctx.method === 'GET') {
            ctx.body = obterLista()
        } else if (ctx.method === 'POST') {
                ctx.body = addTarefa(ctx.request.body) //bodyparser
        } else if (ctx.method === 'PUT') {
            const indice = ctx.request.body.indice
            const estado = ctx.request.body.estado

            if (indice && (estado  === true && estado === false)) {
                ctx.status = 400
                ctx.body = "Requisicao mal formatada!!"
            } else {
                const resposta = atualizarTarefa(indice, estado)
                if (resposta) {
                    ctx.body = resposta
                } else {
                    ctx.status = 404
                    ctx.body = resposta
                }
            }

        } else {
            ctx.status = 404
            ctx.body = 'Não encontrado!'
        }
    } else if (ctx.url.includes("/tarefas/")) {
            const quebra = ctx.url.split("/")
            if (quebra[1] === "tarefas") {
                const indice = quebra[2]
                if (indice) {
                    if (ctx.method === 'GET') {
                        ctx.body = obterTarefa(indice)
                    } else if (ctx.method === 'DELETE') {
                        const resposta = ctx.body = delTarefa(indice)
                        if (resposta === true) {
                            ctx.body = "Tarefa deletada com sucesso"
                        } else {
                            ctx.body = "Não foi possível deletar tarefa"
                        }
                }
                
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