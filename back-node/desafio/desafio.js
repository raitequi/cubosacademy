const koa = require("koa")
const bodyparser = require("koa-bodyparser")

const server = new koa()

server.use(bodyparser())

const produtos = [
    {
        id: 1,
        nome: "Monitor 22 polegadas",
        quantidade: 10,
        valor: 30000, //valor em centavos, 300 reais
        deletado: false
    },
    {
        id: 2,
        nome: "Teclado/mouse sem fio",
        quantidade: 8,
        valor: 15000,
        deletado: false
    },
    {
        id: 3,
        nome: "Cabo HDMI-HDMI",
        quantidade: 5,
        valor: 5000,
        deletado: false
    },
    {
        id: 4,
        nome: "Adaptador Wi-fi USB",
        quantidade: 10,
        valor: 6000,
        deletado: false
    }
]

const obterListaProdutos = () => {
    const listaProdutosSemDeletados = []
    produtos.forEach(produto => {
        if (produto.deletado === false) {
            listaProdutosSemDeletados.push(produto)
        }
    })
    return listaProdutosSemDeletados
}

const obterProduto = (indice) => {
    const produto = produtos[indice]
    if (produto) {
        return produto
    } else {
        return null
    }
}

const addProduto = (produto) => {
    const novoProduto = {
        "id": produtos.length++,
        "nome": produto.nome ? produto.nome : '',
        "quantidade": produto.quantidade ? produto.quantidade : '',
        "valor": produto.valor ? produto.valor : '',
        "deletado": false,
    }
    produtos.push(novoProduto)
    return novoProduto
}

const atualizarProduto = (indice) => {
    const produto = obterProduto(indice)
    const produtoAtualizado = {
        id: produto.id,
        nome: produto.nome,
        quantidade: produto.quantidade,
        valor: produto.valor,
        deletado: produto.deletado
    }

const delProduto = (indice) => {
    const produto = obterProduto(indice)
    if (produto) {
       produtos.splice(indice, 1)
       return true
    } else {
        return false
    }
}

//falta função para alterar quantidade disponivel de produtos

const pedidos = [
    {
        id: 1,
        produtosPedido: produtos[1, 2],
        estado: "incompleto",
        idCliente: 1001,
        deletado: false,
        valorTotal: produtos[1].valor + produtos[2].valor
    },
    {
        id: 2,
        produtosPedido: produtos[0, 1],
        estado: "incompleto",
        idCliente: 1002,
        deletado: false,
        valorTotal: produtos[0].valor + produtos[1].valor
    },
    {
        id: 3,
        produtosPedido: produtos[0, 3],
        estado: "incompleto",
        idCliente: 1003,
        deletado: false,
        valorTotal: produtos[0].valor + produtos[3].valor
    },
    {
        id: 4,
        produtosPedido: produtos[2, 3],
        estado: "incompleto",
        idCliente: 1004,
        deletado: false,
        valorTotal: produtos[2].valor + produtos[3].valor
    }
]

const obterListaPedidos = () => {
    const listaPedidosSemDeletados = []
    pedidos.forEach(pedido => {
        if (pedido.deletado === false) {
            listaPedidosSemDeletados.push(pedido)
        }
    })
    return listaPedidosSemDeletados
}

const obterListaPedidosEntregues = () => {
    const listaPedidosEntregues = []
    pedidos.forEach(pedido => {
        if (pedido.estado === "entregue") {
            listaPedidosEntregues.push(pedido)
        }
    })
    return listaPedidosEntregues
}

const obterListaPedidosPagos = () => {
    const listaPedidosPagos = []
    pedidos.forEach(pedido => {
        if (pedido.estado === "pago") {
            listaPedidosPagos.push(pedido)
        }
    })
    return listaPedidosPagos
}

const obterListaPedidosProcessando = () => {
    const listaPedidosProcessando = []
    pedidos.forEach(pedido => {
        if (pedido.estado === "processando") {
            listaPedidosProcessando.push(pedido)
        }
    })
    return listaPedidosProcessando
}

const obterListaPedidosCancelados = () => {
    const listaPedidosCancelados = []
    pedidos.forEach(pedido => {
        if (pedido.estado === "cancelados") {
            listaPedidosCancelados.push(pedido)
        }
    })
    return listaPedidosCancelados
}

const obterListaPedidosPorID = () => {
    const listaPedidosPorID = []
    let indice = -1
    if (ctx.url.includes("/pedidos/")) {
        const quebra = ctx.url.split("/")
        if (quebra[1] === "pedidos") {
            indice = quebra[2]
        }
    }
    pedidos.forEach(pedido => {
        if (pedido.id === indice) {
            listaPedidosPorID.push(pedido)
        }
    })
    return listaPedidosPorID
}

// falta funções para adicionar, remover e alterar quantidade de produtos da lista de pedidos

const cancelarPedido = (indice) => {
    const listaPedidosCancelados = []
    const pedido = obterListaPedidos(indice)
    if (pedido.cancelado === true) {
       pedidos.splice(indice, 1)
       listaPedidosCancelados.push(pedido)
       return true
    } else {
        return false
    }
}

const pagoPedido = (indice) => {
    const listaPedidosPagos = []
    const pedido = obterListaPedidos(indice)
    if (pedido.pago === true) {
       pedidos.splice(indice, 1)
       listaPedidosPagos.push(pedido)
       return true
    } else {
        return false
    }
}

const entreguePedido = (indice) => {
    const listaPedidosEntregues = []
    const pedido = obterListaPedidos(indice)
    if (pedido.entregue === true) {
       pedidos.splice(indice, 1)
       listaPedidosEntregues.push(pedido)
       return true
    } else {
        return false
    }
}

const processandoPedido = (indice) => {
    const listaPedidosProcessando = []
    const pedido = obterListaPedidos(indice)
    if (pedido.processando === true) {
       pedidos.splice(indice, 1)
       listaPedidosProcessando.push(pedido)
       return true
    } else {
        return false
    }
}

const deletadoPedido = (indice) => {
    const listaPedidosDeletados = []
    const pedido = obterListaPedidos(indice)
    if (pedido.deletado === true) {
       pedidos.splice(indice, 1)
       listaPedidosDeletados.push(pedido)
       return true
    } else {
        return false
    }
}

/*---------------------------------------*/


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