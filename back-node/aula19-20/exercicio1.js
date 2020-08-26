const bancos = {
    001:    "Banco do Brasil",
    033:	"Banco Santander (Brasil) S.A",
    104:	"Caixa Econômica Federal",
    237:	"Banco Bradesco S.A",
    341:	"Banco Itaú S.A",
    356:	"Banco Real S.A (antigo)",
    389:	"Banco Mercantil do Brasil S.A",
    399:	"HSBC Bank Brasil S.A",
    422:	"Banco Safra S.A",
    453:	"Banco Rural S.A",
    633:	"Banco Rendimento S.A",
    652:	"Itaú Unibanco Holding S.A",
    745:	"Banco Citibank S.A"
}

const retornarNomeBanco = (codigo) => {

    const nomeBanco = bancos[codigo]
        .replace("S.A", "").trim()
        .replace("(antigo)", "").trim()
        .replace("(Brasil)", "").trim()
        .replace("Holding", "").trim()

    console.log(nomeBanco)
}

//retornarNomeBanco(356)

//______________________________________________________________//

const retornarCPFsemSimbolo = (codigo) => {
    const tiraSimbolo = codigo.replace(".", "").replace(".", "").replace("-", "")
    console.log(tiraSimbolo)
}

//retornarCPFsemSimbolo("123.456.789-00")

//______________________________________________________________//

const retornarCPFformatado = (codigo) => {
    const colocaSimbolo = `${codigo.substr(0,3)}.${codigo.substr(3,3)}.${codigo.substr(6,3)}-${codigo.substr(9,2)}`
    console.log(colocaSimbolo)
}

//retornarCPFformatado("12345678900")

//______________________________________________________________//

const retornarAGformatado = (codigo) => {
    const colocaSimbolo = `${codigo.substr(0,4)}-${codigo.substr(4,1)}`
    console.log(colocaSimbolo)
}

//retornarAGformatado("12345")

//______________________________________________________________//

const retornarCONTAformatado = (codigo) => {
    const colocaSimbolo = `${codigo.substr(0,6)}-${codigo.substr(6,1)}`
    console.log(colocaSimbolo)
}

//retornarCONTAformatado("1234567")

//______________________________________________________________//

module.exports = {
    retornarNomeBanco: retornarNomeBanco,
    retornarCPFsemSimbolo: retornarCPFsemSimbolo,
    retornarCPFformatado: retornarCPFformatado,
    retornarAGformatado: retornarAGformatado,
    retornarCONTAformatado: retornarCONTAformatado
}