function countWords(str) {
    let arr = str.trim().split(" ").filter(item => item !== "")
    let count = 0;
    for (let item of arr) {
        count++
    }
    return count
}
console.log(
    countWords("I love coding in JS")
)
// 5

console.log(
    countWords(" hello   world ")
)
// 2

console.log(
    countWords("")
)
// 0