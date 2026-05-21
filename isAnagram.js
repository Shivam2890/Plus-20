function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false
    let map = new Map()
    for (let ch of str1) {
        map.set(ch, (map.get(ch) ?? 0) + 1)
    }
    for (let ch of str2) {
        if ((map.get(ch) !== undefined) && map.get(ch) !== 0) {
            map.set(ch, (map.get(ch) ?? 0) - 1)
        } else {
            return false
        }
    }
    console.log(map)
    return true
}
// Test Case 1
console.log(
    isAnagram("listen", "silent")
)
// Expected Output:
// true


// Test Case 2
console.log(
    isAnagram("hello", "bello")
)

// Expected Output:
// false


// Test Case 3
console.log(
    isAnagram("aabb", "abab")
)

// Expected Output:
// true