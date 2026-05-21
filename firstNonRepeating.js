function firstNonRepeating(str) {
    let map = new Map()
    for (let ch of str) {
        map.set(ch, (map.get(ch) ?? 0) + 1)
    }
    for (let [key, values] of map.entries()) {
        if (values == 1) {
            return key
        }
    }
    return null
}
// Test Case 1
console.log(
    firstNonRepeating("swiss")
)

// Expected Output:
// "w"


// Test Case 2
console.log(
    firstNonRepeating("teeter")
)

// Expected Output:
// "r"


// Test Case 3
console.log(
    firstNonRepeating("aabb")
)

// Expected Output:
// null