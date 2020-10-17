const Router = require('koa-router')

const router = new Router()
const { encurtamento } = require('./controllers/encurta.js')
const { redirecionar } = require('./controllers/encurta.js')

router.post('/encurta', encurtamento)
router.get('/:id', redirecionar)

module.exports = router
