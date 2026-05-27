// Create a function to group array of objects by a given property.

function groupBy(arr) {
    let obj = {}
    for (let item of arr) {
        let key = item.city
        if (!obj[key]) {
            obj[key] = [item]
        } else {
            obj[key].push(item)
        }
    }
    return obj
}
let people = [
    { name: "Alice", city: "NYC" },
    { name: "Bob", city: "LA" },
    { name: "Charlie", city: "NYC" }
];

console.log(groupBy(people))
// {
//     NYC: [{ name: "Alice", city: "NYC" }, { name: "Charlie", city: "NYC" }],
//         LA: [{ name: "Bob", city: "LA" }]
// }