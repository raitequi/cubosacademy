const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mochila = {
    maxItens: 5,
    itens: [],
    esvaziaMochila: () => {
        mochila.itens =[]
    },
    adicionarItem: (item) => {
        if(mochila.itens.length >= mochila.maxItens) {
            console.log("A mochila está lotada!")
        } else {
            mochila.itens.push(item)
        }
    }
}

mochila.adicionarItem("Livro");
console.log(mochila)