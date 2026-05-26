function flattenArray(arr, result = []) {
    for (let item of arr) {
        if (Array.isArray(item)) {
            // result.push(...flattenArray(item))
            // result = result.concat(flattenArray(item))
            flattenArray(item, result)
        } else {
            result.push(item)
        }
    }
    return result
}
console.log(
    flattenArray([1, [2, 3], 4])
)
// [1,2,3,4]

console.log(
    flattenArray([[1, 2], [3], [4, 5]])
)
// [1,2,3,4,5]

console.log(
    flattenArray([1, 2, 3])
)
// [1,2,3]