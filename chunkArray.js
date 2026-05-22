// function chunkArray(arr, k) {
//     let result = []
//     for (let i = 0; i < arr.length; i += k) {
//         let chunk = []
//         for (let p = i; p < i + k; p++) { // remember this i+k
//             if (arr[p] === undefined) {
//                 break;
//             }
//             chunk.push(arr[p])
//         }
//         result.push(chunk)
//     }
//     return result
// }

function chunkArray(arr, k) {
    let result = []
    for (let i = 0; i < arr.length; i += k) {
        result.push(arr.slice(i, i + k))
    }
    return result
}

console.log(
    chunkArray([1, 2, 3, 4, 5], 2)
)
// [[1,2],[3,4],[5]]

console.log(
    chunkArray([1, 2, 3, 4], 3)
)
// [[1,2,3],[4]]

console.log(
    chunkArray([], 1)
)
// []