const response = require('./response')
const Autores = require('../repositories/autores')
const pass = require('../utils/password')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const autenticar = async (ctx) => {
    const {email = null, password = null} = ctx.request.body;
    if (!email || !password) {
        return response(ctx, 400, { mensagem: 'Pedido mal formatado'});
    }

    const autor = await Autores.obterAutorPorEmail(email)

    if (autor) {
        const comparar = await pass.checkPass(password, autor.senha)
        if (comparar) {
            const token = jwt.sign({ id: autor.id, email: autor.email }, process.env.JWT_SECRET || 'cubosacademy', { expiresIn: '10min'})
            return response(ctx, 200, { token })
        }
    }

    return response(ctx, 200, { mensagem: 'Email ou senha incorretos...'});
}

module.exports = { autenticar }