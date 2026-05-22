function rotateArray(arr, k) {
    if (arr.length === 0) {
        return []
    }
    k %= arr.length
    function reverse(i, j) {
        while (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
    }
    reverse(0, arr.length - 1)
    reverse(0, k - 1)
    reverse(k, arr.length - 1)
    return arr
}
console.log(
    rotateArray([1, 2, 3, 4, 5], 2)
)
// [4,5,1,2,3]

console.log(
    rotateArray([1, 2, 3], 3)
)
// [1,2,3]

console.log(
    rotateArray([], 1)
)
// []