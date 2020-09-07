const koa = require("koa")
const server = new koa()
server.use((ctx) => {
    ctx.status = 201
    const nome = ctx.query.nome
    const redirecionar = ctx.query.redirecionar
    console.log(nome)

    if (!nome) {
        ctx.status = 404
        ctx.body = 'Você precisa passar um nome'
        return
    }
    
    if (redirecionar) {
        ctx.redirect('https://globoesporte.globo.com')
        return
    }

    ctx.body = `Olá ${nome}!`
})

server.listen(8080, () => console.log("Servidor rodando na porta 8080"))