// const a = [1, 2, 3 ,4]
// const enc = a.find((x) => x > 3)
// console.log(enc)

// const a = ["sergipe", "seergipee", "seeeerrrgiiipeee", "se"]
// const enc = a.find((x) => x.length > 10) //retorna a posição que tem mas de 10 caracteres
// console.log(enc)

// const a = ["sergipe", "seergipee", "seeeerrrgiiipeee", "se"]
// const enc = a.findIndex((x) => x.length > 10) //retorna a posição 2 do array
// console.log(enc)

const texto = `Boa noite
tem
alguém
aí?`

const txtArray = texto.split('')
const indices = []

console.log(txtArray)

let inEnc = 0
while (inEnc !== -1) {
    inEnc = txtArray.findIndex((x) => x === '\n')

    if (inEnc !== -1) {
        txtArray.splice(inEnc, 1)
        indices.push(inEnc)
    }
}
console.log(indices)