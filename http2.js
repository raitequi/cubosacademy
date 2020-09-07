const koa = require("koa")
const server = new koa()
server.use((ctx) => {
    if (ctx.method === 'GET') {
        ctx.body = 'GET'
    } else if (ctx.method === 'POST') {
        ctx.body = 'POST'
    } else {
        ctx.status = 405
        ctx.body = 'Método não permitido'
    }
})

server.listen(8080, () => console.log("Servidor rodando na porta 8080"))