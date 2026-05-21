function removeDuplicates(arr) {
    let set = new Set()
    let p = 0
    for (let i = 0; i < arr.length; i++) {
        let ch = arr[i]
        if (!set.has(ch)) {
            set.add(ch)
            arr[p] = ch
            p++
        }
    }
    arr.splice(p)
    return arr
}

// Test Case 1
console.log(
    removeDuplicates([1, 2, 2, 3, 1, 4])
)

// Expected Output:
// [1, 2, 3, 4]


// Test Case 2
console.log(
    removeDuplicates(["a", "b", "a", "c", "b"])
)

// Expected Output:
// ["a", "b", "c"]


// Test Case 3
console.log(
    removeDuplicates([5, 5, 5])
)

// Expected Output:
// [5]