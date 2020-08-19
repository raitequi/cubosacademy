const fs = require("fs")

const stream = fs.createReadStream("texto.txt")

let texto = ''
stream.on('data', (data) => {
    texto += data
    console.log("Cod2: ", data.toString())
})

console.log("Cod1: ", texto)

stream.on('end', () => {
    console.log("Cod3: ", texto + "!!!!!!")
})