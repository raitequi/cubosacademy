const array = [10,20,30,40,50]

array.forEach((item, i) => {
    console.log(i, item)
})

array.forEach(item => console.log('\n',item))

//map cria um novo arry, por isso declarar em uma variável abaixo

const newArray = array.map((x, i, a) => { //x = item atual a ser iterado, a = array que chamou
    return x*2
})
console.log(newArray)


const newArray2 = array.map(x => x*4)
console.log(newArray2)


const arrayGritaria = ['grrr', 'gaaah', 'whoaaa']
const newArray3 = arrayGritaria.map(x => x.toUpperCase() + "!!!")
console.log(newArray3)



const newArray4 = arrayGritaria.map((x, i) => {
    if (i > 0) {
        return x.toUpperCase() + "!!!"
    } else {
        return x
    }
})
console.log(newArray4)



function maiorDoQue(valor) {
    return valor >=10
}
const num = [9, 24, -4, 6, 33, 74].filter(maiorDoQue)
console.log(num)

const num2 = [9, 24, -4, 6, 33, 74]
const num3 = num2.filter(x => {
    if (x>=10) {
        return true
    } else {
        return false
    }
})
console.log(num3)

console.log(num2.filter(x => x > 10))

const funcReduce = num2.reduce((acc, x, i) => { // x = valor do item1
    console.log(`${acc}, ${x}, ${i}`) //como está funcionando...
    return acc+x
},0) // 0 = item inicial do array
console.log(funcReduce)