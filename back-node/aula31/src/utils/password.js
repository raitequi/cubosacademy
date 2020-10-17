const bcrypt = require('bcryptjs');

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash('102030', salt, (err2, hash) => {
//         console.log(hash);
//     });
// });

const checkPass = async (password, hash) => {
    const comparar = await bcrypt.compare(password, hash)
    return comparar
}

const encryptPass = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

// (async () => {
//     const hash = await encryptPass('102030')
//     console.log('O hash é', hash)

//     const comparar = await checkPass('102030', hash)
//     console.log('Resposta:', comparar)
// })()

module.exports = { checkPass, encryptPass }