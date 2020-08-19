const fs = require("fs")
const csvParser = require("csv-parser") //instalar via npm install csv-parser, antes

const stream = fs.createReadStream("countries.csv")

//stream.pipe(csvParser()) //a função PIPE vai jogando os dados pouco a pouco

let conteudo = '' //string vazia que vai armazenar a saída de countries.csv

stream.pipe(csvParser()).on('data', (data) => {
    conteudo += data //armazenando todos dados da saída de countries.csv para 'conteudo'
    console.log(data) //com o csvParser declarado aqui, console.log pode ser 'data'
})