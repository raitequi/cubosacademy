const pass = require('../utils/password')
const response = require('../controllers/response')

const encrypt = async (ctx, next) => {
    const { senha = null }  = ctx.request.body

    if (!senha) {
        return response(ctx, 400, { message: 'Pedido mal formatado' });
    }

    const hash = await pass.encryptPass(senha)

    ctx.state.hash = hash

    return next()
}

module.exports = { encrypt }