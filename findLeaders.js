// function findLeaders(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let flag = true
//         for (let j = i + 1; j < arr.length; j++) {
//             // if current elemetn is not greater then next elements
//             if (arr[i] <= arr[j]) {
//                 flag = false
//                 break;
//             }
//         }
//         if (flag) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

function findLeaders(arr) {
    let i = arr.length - 1
    let max = -Infinity
    let result = []
    while (i >= 0) {
        if (arr[i] > max) {
            result.push(arr[i])
            max = arr[i]
        }
        i--
    }
    return result.reverse()
}
console.log(
    findLeaders([16, 17, 4, 3, 5, 2])
)
// [17,5,2]

console.log(
    findLeaders([1, 2, 3, 4, 5])
)
// [5]

console.log(
    findLeaders([5, 4, 3, 2, 1])
)
// [5,4,3,2,1]