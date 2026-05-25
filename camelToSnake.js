function camelToSnake(str) {
    let arr = str.split("")
    for (let ch of arr) {
        if ("A" <= ch && ch <= "Z") {
            console.log(ch)
        }
    }
    // return arr
}
console.log(
    camelToSnake("helloWorld")
)
// "hello_world"

console.log(
    camelToSnake("convertThisString")
)
// "convert_this_string"

console.log(
    camelToSnake("already_snake")
)
// "already_snake"