// function equilibriumIndex(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         let leftSum = 0;
//         for (let j = 0; j < i; j++) {
//             leftSum += nums[j]
//         }

//         let rightSum = 0;
//         for (let k = i + 1; k < nums.length; k++) {
//             rightSum += nums[k]
//         }
//         if (leftSum == rightSum) {
//             return i
//         }
//     }
//     return -1
// }

function equilibriumIndex(nums) {
    let total = 0
    for (let item of nums) {
        total += item
    }
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        let rightSum = total - leftSum - nums[i]
        if (rightSum === leftSum) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
}
console.log(
    equilibriumIndex([1, 7, 3, 6, 5, 6])
)
// 3

console.log(
    equilibriumIndex([1, 2, 3])
)
// -1

console.log(
    equilibriumIndex([2, 0, 0, 0])
)
// 0