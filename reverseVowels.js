function reverseVowels(str) {
    let arr = str.split("")
    let v = new Set("aeiou")
    let i = 0;
    let j = arr.length - 1
    while (i < j) {
        while (!v.has(arr[i]) && i < j) {
            i++
        }
        while (!v.has(arr[j]) && i < j) {
            j--
        }

        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++;
        j--
    }

    return arr.join("")
}
console.log(
    reverseVowels("leetcode")
)
// "leotcede"
console.log(
    reverseVowels("hello")
)
// "holle"
console.log(
    reverseVowels("bcd")
)
// "bcd"