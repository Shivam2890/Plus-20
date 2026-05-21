function intersection(arr1, arr2) {
    arr1 = arr1.sort()
    arr2 = arr2.sort()
    let result = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            if (!result.includes(arr1[i])) {
                result.push(arr1[i])
            }
            i++
            j++
        }
        while (arr1[i] < arr2[j] && i < arr1.length) {
            i++
        }
        while (arr2[j] < arr1[i] && j < arr2.length) {
            j++
        }
    }
    return result
}

// Test Case 1
console.log(
    intersection([1, 2, 2, 3], [2, 3, 4])
)

// Expected Output:
// [2, 3]


// Test Case 2
console.log(
    intersection(["a", "b", "c"], ["c", "d", "a"])
)

// Expected Output:
// ["a", "c"]


// Test Case 3
console.log(
    intersection([1, 1, 1], [2, 2, 2])
)

// Expected Output:
// []