function mergeObjects(arr) {
    let result = {}
    for (let item of arr) {
        let role = item.name
        if (!result[role]) {
            result[role] = item.values
        } else {
            result[role].push(...item.values)
        }
    }
    let ans = []
    for (let key in result) {
        ans.push({
            name: key,
            values: result[key]
        })
    }
    return ans
}

// Test Case 1
console.log(
    mergeObjects([
        { name: 'a', values: [1, 2] },
        { name: 'b', values: [3] },
        { name: 'a', values: [4, 5] }
    ])
)

// Expected Output:
// [
//   { name: 'a', values: [1,2,4,5] },
//   { name: 'b', values: [3] }
// ]
