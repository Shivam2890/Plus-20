function secondLargest(arr) {
    if (arr.length < 2) return null
    let max = -Infinity
    let second = max
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            second = max
            max = arr[i]
        } else if (arr[i] > second && arr[i] !== max) {
            second = arr[i]
        }
    }
    if (second === -Infinity) {
        return null
    }
    return second
}
// Test Case 1
console.log(
    secondLargest([10, 5, 20, 8])
)

// Expected Output:
// 10


// Test Case 2
console.log(
    secondLargest([5, 5, 5, 1])
)

// Expected Output:
// 1


// Test Case 3
console.log(
    secondLargest([1, 2])
)

// Expected Output:
// 1