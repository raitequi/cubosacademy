/* eslint-disable camelcase */
const { gerarCodigo } = require('../utils/code.js')
const resposta = require('./response.js')

const urls = []

const encurtamento = (ctx) => {
	const { url } = ctx.request.body
	if (!url) {
		resposta(ctx, 400, { mensagem: 'Pedido mal-formatado!' })
	} else {
		const codigo = gerarCodigo()
		urls.push({ [codigo]: url })
		resposta(ctx, 201, {
			url_original: url,
			url_encurtada: `localhost:9000/${codigo}`,
		})
	}
}

const obterUrl = (codigo) => {
	for (let i = 0; i < urls.length; i++) {
		return urls[i][codigo]
	}

	return null
}

const redirecionar = (ctx) => {
	// console.log(ctx.params)
	const url_desejada = ctx.params.id
	const url_original = obterUrl(url_desejada)

	if (url_original) {
		ctx.status = 301
		ctx.redirect(url_original)
	} else {
		resposta(ctx, 400, { mensagem: 'Recurso não encontrado!' })
	}
}

module.exports = { encurtamento, redirecionar }
