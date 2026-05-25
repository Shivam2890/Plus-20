function findIndices(str, target) {
    let result = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            result.push(i)
        }
    }
    return result
}

// Test Case 1
console.log(
    findIndices("javascript", "a")
)

// Expected Output:
// [1,3,7]


// Test Case 2
console.log(
    findIndices("hello", "l")
)

// Expected Output:
// [2,3]


// Test Case 3
console.log(
    findIndices("abc", "z")
)

// Expected Output:
// []