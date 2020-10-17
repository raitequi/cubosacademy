const arr = [10,23,1,2,3,7,54,100]

// const compCresc = (a, b) => {
//     if (a < b) {
//         return -1
//     } else {
//         return 1
//     }
// }

// const compCresc = (a,b) => a < b ? -1 : 1

arr.sort((a,b) => a - b)

console.log(arr)