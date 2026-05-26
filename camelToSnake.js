function camelToSnake(str) {
    let result = ""
    for (let ch of str) {
        if (ch >= "A" && ch <= "Z") {
            result += "_" + ch.toLowerCase()
        } else {
            result += ch
        }
    }
    return result
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