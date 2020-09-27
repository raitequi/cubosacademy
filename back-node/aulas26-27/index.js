const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const Router = require('koa-router')
const server = new Koa();
const router = new Router()

server.use(bodyparser());

const urls = [];

const gerarCodigo = () => Math.random().toString(36).substr(2, 9);

const encurtamento = (ctx) => {
  const url = ctx.request.body.url;
  if (!url) {
    ctx.status = 400;
    ctx.body = {
      status: "erro",
      dados: {
        mensagem: "Pedido mal-formatado!",
      },
    };
  } else {
    const codigo = gerarCodigo();
    urls.push({ [codigo]: url });

    ctx.status = 201;
    ctx.body = {
      status: "sucesso",
      dados: {
        url_original: url,
        url_encurtada: `localhost:8081/${codigo}`,
      },
    };
  }
}

const redirecionar = (ctx) => {

  //console.log(ctx.params)
  const url_desejada = ctx.params.id
  const url_original = obterUrl(url_desejada);

  if (url_original) {
    ctx.status = 301;
    ctx.redirect(url_original);
  } else {
    ctx.status = 404;
    ctx.body = {
      status: "erro",
      dados: {
        mensagem: "Conteúdo não encontrado!",
      },
    };
  }
}

router.post('/encurta', encurtamento)
router.get("/:id", redirecionar)

server.use(router.routes())


/**
 * Obtém uma url anteriormente encurtada
 */
const obterUrl = (codigo) => {
  for (let i = 0; i < urls.length; i++) {
    return urls[i][codigo];
  }

  return null;
};

/**
 * Lida com toda requisição POST feita em /encurta
 */

/**
 * Ctx
 *  -> Requisição
 *  -> Resposta
 */

server.use((ctx, next) => { //next = função para o próximo server.use
  console.log(ctx.method, ctx.url, ctx.request.body)
  next()
})

server.use((ctx) => {
 ctx.status= 404
 ctx.body = {
   status: "erro",
   dados: {
     mensagem: "Recurso não encontrado"
   }
 }
});

server.listen(8081, () => console.log("Está rodando na porta 8081"));
