// function countPairs(arr, k) {
//     let set = new Set()
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if ((arr[i] + arr[j]) === k) {
//                 let pair = Math.min(arr[i], arr[j]) + "," + Math.max(arr[i], arr[j])
//                 if (!set.has(pair)) {
//                     set.add(pair)
//                     count++
//                 }
//             }
//         }
//     }
//     return count
// }

// function countPairs(arr, k) {
//     let set = new Set()
//     let set1 = new Set()

//     let count = 0
//     for (let y of arr) {
//         let x = k - y

//         if (set.has(x)) {
//             set.add(y)
//             let pair = Math.min(x, y) + "," + Math.max(x, y)
//             if (!set1.has(pair)) {
//                 count++
//                 set1.add(pair)
//             }
//         } else {
//             set.add(y)
//         }
//     }
//     return count
// }
function countPairs(nums, target) {
    let map = new Map()
    let result = []
    for (let y = 0; y < nums.length; y++) {
        let x = target - nums[y]

        if (map.has(x)) {
            result.push(map.get(x), y)
        } else {
            map.set(nums[y], y)
        }
    }
    return result
}
console.log(
    countPairs([1, 2, 3, 4, 5], 6)
)
// 2

console.log(
    countPairs([1, 1, 1, 2, 2], 3)
)
// 1

console.log(
    countPairs([0, 0, 0], 0)
)
// 1