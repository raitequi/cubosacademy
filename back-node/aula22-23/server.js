const koa = require("koa")
const server = new koa()

server.use((ctx) => {
    ctx.status = 201
    const nome = ctx.query.nome
    const redirecionar = ctx.query.redirect
    if (!nome) {
        ctx.status = 400
        ctx.body = "Você precisa passar um nome!"
        return
    } else if (redirecionar) {
        ctx.redirect('https://globoesporte.globo.com')
        return
    }
    console.log(nome)
    ctx.body = `Oi, ${nome}`
})

server.listen(8081, () => console.log("Rodando na porta 8081"))