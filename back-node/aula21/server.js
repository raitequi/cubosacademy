const koa = require('koa')
const server = new koa()

server.use(async ctx => {
    ctx.body = 'Teste' //ctx=context
    console.log(ctx)
})

server.listen(8081, () => {
    console.log('Servidor no ar')
})