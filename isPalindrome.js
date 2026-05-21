function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1
    while (i < j) {
        while (i < j && !check(str[i])) {
            i++
        }
        while (i < j && !check(str[j])) {
            j--
        }
        if (str[i].toLowerCase() !== str[j].toLowerCase()) {
            return false
        }
        i++
        j--
    }
    return true
    function check(ch) {
        return (
            (ch >= "a" && ch <= "z") ||
            (ch >= "A" && ch <= "Z") ||
            (ch >= "0" && ch <= "9")
        )
    }
}
// Test Case 1
console.log(
    isPalindrome("A man, a plan, a canal: Panama")
)

// Expected Output:
// true

// Test Case 2
console.log(
    // isPalindrome("race a car")
)

// Expected Output:
// false


// Test Case 3
console.log(
    // isPalindrome("No lemon, no melon")
)

// Expected Output:
// true