const koa = require("koa")
const bodyparser = require("koa-bodyparser")

const server = new koa()

server.use(bodyparser())

const formatarReqSucesso = (ctx, dados, status=200) => {
    ctx.status = status
    ctx.body = {
        status: 'sucesso',
        dados: dados
    }
}

const formatarReqErro = (ctx, mensagem, status=404) => {
    ctx.status = status
    ctx.body = {
        status: 'erro',
        dados: {
            mensagem: mensagem
        }
    }
}



const autor = {
    id: 1,
    nome: 'Noam',
    sobrenome: 'Chomsky',
    email: 'noam.chomsky@gah.org',
    senha: '123456',
    deletado: false
}

const post = {
    id: 1,
    titulo: 'Back-end na veia',
    subtitulo: 'Veja como se tornar um dev back-end em 3 passos',
    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    autor: 1,
    publicado: false,
    deletado: false
}

const listaAutores = []
listaAutores.push(autor)

const listaPosts = []
listaPosts.push(post)

const obterAutores = () => {
    return listaAutores.filter((autor) => !autor.deletado)
}

const addAutor = (ctx) => {
    const body = ctx.request.body

    if (!body.nome || !body.sobrenome || !body.email || !body.senha) {
        formatarReqErro(ctx, 'Pedido mal-formatado!!', 400)
        return
    }
    const autor = {
        id: listaAutores.length +1,
        nome: body.nome,
        sobrenome: body.sobrenome,
        email: body.email,
        senha: body.senha,
        deletado: false
    }

    listaAutores.push(autor)
    return autor
}

const atualizarAutor = (ctx) => {
    const id = ctx.url.split('/')[2]
    const body = ctx.request.body

    if (!body.nome && !body.sobrenome && !body.email && !body.senha) {
        formatarReqErro(ctx, 'Pedido mal formatado!!!', 400)
    }

    if (id) {
        const autorAtual = listaAutores[id -1]
        if (autorAtual) {
            const autorAtualizado = {
                id: Number(id),
                nome: body.nome ? body.nome : autorAtual.nome,
                sobrenome: body.sobrenome ? body.sobrenome : autorAtual.sobrenome,
                email: body.email ? body.email : autorAtual.email,
                senha: body.senha ? body.senha : autorAtual.senha
            }
            listaAutores[id -1] = autorAtualizado
            return autorAtualizado
        }
        
    } else {
        formatarReqErro(ctx, 'Pedido mal formatado!!!', 400)
    }
}

const obterPostsDoAutor = (autorId) => {
    const postsDoAutor = listaPosts.filter((post) => {
        return post.autor == autorId && post.deletado === false
    })
    return postsDoAutor
}

const deletarAutor = (ctx) => {
    const id = ctx.url.split('/')[2]
    const body = ctx.request.body

    if (typeof body.estado !== 'boolean') {
       formatarReqErro(ctx, 'Pedido mal-formatado!', 400)
    }

    if (id) {
        const autorAtual = listaAutores[id -1]
        if (autorAtual) {
            if (body.estado === true && obterPostsDoAutor(id).length > 0) {
                formatarReqErro(ctx, 'Ação proibida', 403)
                return
            }
            const autorAtualizado = {
                id: autorAtual.id,
                nome: autorAtual.nome,
                sobrenome: autorAtual.sobrenome,
                email: autorAtual.email,
                senha: autorAtual.senha,
                deletado: body.estado
            }
            listaAutores[id -1] = autorAtualizado
            return autorAtualizado
        }
    }
}

const obterPosts = () => {
    return listaPosts.filter((post) => !post.deletado && !post.publicado)
}

const atualizarPost = (ctx) => {
    const id = ctx.url.split('/')[2]
    const body = ctx.request.body

    if (!body.conteudo && !body.titulo && !body.subtitulo || typeof body.publicado !== 'boolean') {
        formatarReqErro(ctx, 'Pedido mal formatado!!!', 400)
    }

    if (id) {
        const postAtual = listaPosts[id -1]
        if (postAtual) {
            const postAtualizado = {
                id: Number(id),
                conteudo: body.conteudo ? body.conteudo : postAtual.conteudo,
                titulo: body.titulo ? body.titulo : postAtual.titulo,
                subtitulo: body.subtitulo ? body.subtitulo : postAtual.subtitulo,
                autor: postAtual.autor,
                deletado: postAtual.deletado,
                publicado: !!body.publicado
            }
            listaPosts[id -1] = postAtualizado
            return postAtualizado
        }
        
    } else {
        formatarReqErro(ctx, 'Pedido mal formatado!!!', 400)
    }
}

const deletarPost = (ctx) => {
    const id = ctx.url.split('/')[2]
    const body = ctx.request.body

    if (typeof body.estado !== 'boolean') {
       formatarReqErro(ctx, 'Pedido mal-formatado!', 400)
    }
    if (id) {
        const postAtual = listaPosts[id -1]
        if (postAtual) {
            const postAtualizado = {
                id: postAtual.id,
                titulo: postAtual.titulo,
                subtitulo: postAtual.subtitulo,
                conteudo: postAtual.conteudo,
                autor: postAtual.autor,
                publicado: postAtual.publicado,
                deletado: body.estado
            }
            listaPosts[id -1] = postAtualizado
            return postAtualizado
        }
    }
}

const addPost = (ctx) => {
    const body = ctx.request.body

    if (!body.titulo || !body.subtitulo || !body.conteudo || !body.autor) {
        formatarReqErro(ctx, 'Pedido mal-formatado!!', 400)
        return
    } else if (listaAutores[body.autor -1].deletado === true) {
        formatarReqErro(ctx, 'Ação proibida', 403)
        return
    }
    const post = {
        id: listaPosts.length +1,
        titulo: body.titulo,
        subtitulo: body.subtitulo,
        conteudo: body.conteudo,
        autor: body.autor,
        publicado: false,
        deletado: false
    }

    listaPosts.unshift(post) //push seria o normal, unshift coloca em ordem do mais recente
    return post
}


const rotasAutores = (ctx, diretorio) => {
    switch (ctx.method) {
        case 'GET':
            const id = diretorio[2]
            if (id) {
                if (listaAutores[id -1]) {
                    formatarReqSucesso(ctx, listaAutores[id -1])
                } else {
                    formatarReqErro(ctx, 'Autor não encontrado!!', 404)
                }
            } else {
                formatarReqSucesso(ctx, obterAutores())
            }
            break
        case 'POST':
            const autorAdicionado = addAutor(ctx)
            if (autorAdicionado) {
                formatarReqSucesso(ctx, autor, 201)
            }
            break
        case 'PUT':
            const autorAtualizado = atualizarAutor(ctx)
            if (autorAtualizado) {
                formatarReqSucesso(ctx, autor, 200)
            }
            break            
        case 'DELETE':
            const autorDeletado = deletarAutor(ctx)
            if (autorDeletado) {
                formatarReqSucesso(ctx, { mensagem: "Autor deletado!" }, 200)
            }
            break
        default:
            //erro
            formatarReqErro(ctx, "Método não permitido!!!", 405)
            break;
    }
 }
 const rotasPosts = (ctx, diretorio) => {
    switch (ctx.method) {
        case 'GET':
            const id = diretorio[2]
            if (id) {
                if (listaPosts[id -1]) {
                    formatarReqSucesso(ctx, listaPosts[id -1])
                } else {
                    formatarReqErro(ctx, 'Post não encontrado!!', 404)
                }
            } else {
                formatarReqSucesso(ctx, obterPosts())
            }
            break
        case 'POST':
            const postAdicionado = addPost(ctx)
            if (postAdicionado) {
                formatarReqSucesso(ctx, post, 201)
            }
            break
        case 'PUT':
            const postAtualizado = atualizarPost(ctx)
            if (postAtualizado) {
                formatarReqSucesso(ctx, postAtualizado, 200)
            }
            break            
        case 'DELETE':
            const postDeletado = deletarPost(ctx)
            if (postDeletado) {
                formatarReqSucesso(ctx, { mensagem: "Post deletado!" }, 200)
            }
            break
        default:
            formatarReqErro(ctx, "Método não permitido!!!", 405)
            break;
    }
 }
const rotas = (ctx) => {
    const diretorio = ctx.url.split("/")

    if (diretorio[1] === 'autor') {
        rotasAutores(ctx, diretorio)
    } else if (diretorio[1] === 'posts') {
        rotasPosts(ctx, diretorio)
    } else {
       formatarReqErro(ctx, 'Conteúdo não encontrado!!', 404)
    }
}

server.use((ctx) => {
    rotas(ctx)
})

server.listen(8080, () => console.log("Servidor rodando na porta 8080"))
