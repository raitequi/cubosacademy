/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const Router = require('koa-router')

const server = new Koa()
const router = require('./src/routes')
require('dotenv').config()

const PORT = process.env.PORT || 8000 // <======= se não estiver em .env, utilizará padrão a 8000
server.use(bodyparser())

server.use(router.routes())

server.use((ctx, next) => {
	// next = função para o próximo server.use
	console.log(ctx.method, ctx.url, ctx.request.body)
	next()
})

server.use((ctx) => {
	ctx.status = 404
	ctx.body = {
		status: 'erro',
		dados: {
			mensagem: 'Recurso não encontrado',
		},
	}
})

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
