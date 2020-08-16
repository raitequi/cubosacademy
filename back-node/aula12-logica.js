// Funções que ficam dentro de objetos passam a ser MÉTODOS,
// e esse é um dos princípios de programação orientada a objetos.
// No exemplo abaixo, o método imprimirDados exposto.
// Lembrando que uma função, pode ser declarada das seguintes formas:
// function nomeDaFuncao(args), variavel = () => (chamada função arrow)

//MÉTODO: propriedade dentro de um objeto que guarda uma função

const pessoa = {
    nome: "Iode",
    idade: 28,
    profissao: "Estudante full-stack",
    imprimirDados: () => {
        console.log(`Nome: ${pessoa.nome}`)
        console.log(`Idade: ${pessoa.idade}`)
        console.log(`Profissão: ${pessoa.profissao}`)
    }
}

pessoa.imprimirDados()