const Router = require('koa-router');
const router = new Router();

const Auth = require('./controllers/auth')
const Autores = require('./controllers/autores');
const Posts = require('./controllers/posts');
const Password = require('./middlewares/encrypt')
const Session = require('./middlewares/sessions')

router.post('/auth', Auth.autenticar)

router.get('/autor', Autores.obterAutores);
router.get('/autor/:id', Autores.obterAutor);
router.post('/autor', Password.encrypt, Autores.adicionarAutor);
router.put('/autor/:id', Session.verificar, Autores.atualizarAutor);
router.delete('/autor/:id', Session.verificar, Autores.deletarAutor);

router.get('/posts', Session.verificar, Posts.obterPosts);
router.get('/posts/:id', Session.verificar, Posts.obterPost);
router.post('/posts', Session.verificar, Posts.adicionarPost);
router.put('/posts/:id', Session.verificar, Posts.atualizarPost);
router.delete('/posts/:id', Session.verificar, Posts.deletarPost);

module.exports = router;
