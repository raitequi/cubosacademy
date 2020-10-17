const jwt = require('jsonwebtoken')
const response = require('../controllers/response');

require('dotenv').config()

const verificar = async (ctx, next) => {
    const [bearer, token] = ctx.headers.authorization.split(' ')

    try {    
        const verification = await jwt.verify(token, process.env.JWT_SECRET)

        ctx.state.userId = verification.indexOf;
        ctx.state.email = verification.email
    } catch (err) {
        return response(ctx, 403, { message: 'Ação proibida' })
    }

    return next()
}

module.exports = { verificar }