// function bucketNumbers(arr, k = 10) {
//     let result = []
//     while (arr.length !== 0) {
//         let brr = []
//         for (let i = 0; i < arr.length; i++) {
//             if (k - 10 < arr[i] && arr[i] <= k) {
//                 brr.push(arr[i])
//                 arr.splice(i, 1)
//                 console.log(arr)
//             }
//         }
//         k += 10
//         result.push(brr)
//     }
//     return result
// }

// function bucketNumbers(arr, k = 10) {
//     if(arr.length === 0) return []
//     let bucket = []
//     let max = Math.max(...arr)
//     let bucketCount = Math.floor(max / k)

//     for (let i = 0; i <= bucketCount; i++) {
//         bucket.push([])
//     }
//     for (let i = 0; i < arr.length; i++) {

//         let bucketIndex = Math.floor(arr[i] / k)
//         bucket[bucketIndex].push(arr[i])
//     }
//     return bucket
// }

function bucketNumbers(arr, k = 10) {

    // always 10 buckets
    let buckets = Array.from(
        { length: 10 },
        () => []
    );

    for (let num of arr) {

        let bucketIndex = Math.floor(num / k);

        // handle 100 separately
        if (bucketIndex >= 10) {
            bucketIndex = 9;
        }

        buckets[bucketIndex].push(num);
    }

    return buckets;
}
console.log(
    // bucketNumbers([10, 12, 71, 52, 1, 5, 22])
)
// [
//   [1,5,10],
//   [12],
//   [22],
//   [],
//   [],
//   [52],
//   [],
//   [71],
//   [],
//   []
// ]

console.log(
    bucketNumbers([0, 100, 50, 25, 75])
)
// [
//   [0],
//   [],
//   [25],
//   [],
//   [50],
//   [],
//   [],
//   [75],
//   [],
//   [100]
// ]


console.log(
    // bucketNumbers([])
)
// [[],[],[],[],[],[],[],[],[],[]]