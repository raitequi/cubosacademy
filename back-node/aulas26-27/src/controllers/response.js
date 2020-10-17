const resposta = (ctx, codigo, dados) => {
	const status = codigo >= 200 && codigo <= 399 ? 'sucesso' : 'erro'
	ctx.status = codigo
	ctx.body = {
		status,
		dados,
	}
}

module.exports = resposta
