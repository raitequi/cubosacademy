// const pessoa = {
//     nome: 'Iode',
//     idade: 32,
//     profissao: 'Psicólogo'
// }

// const pessoaEmString = JSON.stringify(pessoa)
// console.log(pessoaEmString)

// localStorage.setItem('pessoa', pessoaEmString)

const pessoaEmString = localStorage.getItem('pessoa')
console.log(pessoaEmString)

const pessoaa = JSON.parse(pessoaEmString)

const h1 = document.querySelector('h1')
h1.innerText = `Olá, ${pessoaa.profissao} ${pessoaa.nome}! Você tem ${pessoaa.idade} anos?`