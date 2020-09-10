
const nome = localStorage.getItem('nome')
const profissao = localStorage.getItem('profissao')

const h1 = document.querySelector('h1')

if (nome != null) {
    h1.innerText = `Olá, ${profissao} ${nome}!`
}