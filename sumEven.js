function sumEven(arr) {
    let sum = 0
    for (let num of arr) {
        if ((num & 1) === 0) {
            sum += num
        }
    }
    return sum
}
console.log(
    sumEven([1, 2, 3, 4, 5, 6])
)
// 12

console.log(
    sumEven([2, 4, 6])
)
// 12

console.log(
    sumEven([1, 3, 5])
)
// 0
