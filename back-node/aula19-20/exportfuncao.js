const minhasFuncoes = require("./exercicio1")

const correntistas = [
    {
        banco: 001,
        CPF: 74185296300,
        agência: 01234,
        conta: 0123456
    },

    {
        banco: 033,
        CPF: 96385274155,
        agência: 43210,
        conta: 6543210
    },

    {
        banco: 341,
        CPF: 25896314777,
        agência: 67890,
        conta: 4567890
    }
]

const percorreLista = (cpf) => {

    let usuario = null

    for (i=0; i<correntistas.length; i++) {

        if (correntistas[i].CPF === cpf) {
            usuario = correntistas[i]
            console.log(usuario)
        }
    }
    if (usuario === null) {
        console.log("Não existe CPF cadastrado")
    }    
}

percorreLista(25896314777)

//______________________________________________________________//

const adicionarNovoCorrentista = (novo) =>{
    const novoCorrentista = correntistas.push(novo)
}

adicionarNovoCorrentista({
        banco: 453,
        CPF: 25896345600,
        agência: 95159,
        conta: 5735715
})

console.log(correntistas)