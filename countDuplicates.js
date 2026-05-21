function countDuplicates(arr) {
    let map = new Map()
    let result = {}
    for (let item of arr) {
        map.set(item, (map.get(item) ?? 0) + 1)
    }
    for (let [key, values] of map.entries()) {
        if (values > 1) {
            result[key] = values
        }
    }
    return result
}

// Test Case 1
// console.log(
//     countDuplicates([1, 2, 2, 3, 3, 3, 4])
// )
// Expected Output:
// { 2: 2, 3: 3 }

// Test Case 2
console.log(
    countDuplicates(["a", "b", "a", "c", "b"])
)
// Expected Output:
// { a: 2, b: 2 }

// // Test Case 3
// console.log(
//     countDuplicates([5, 6, 7])
// )

// Expected Output:
// {}