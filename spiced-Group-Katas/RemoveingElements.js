// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/ 
/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] -> ["Keep", "Keep", "Keep", ...]
None of the array will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr) {
    // create new array
    const result = []
    // iterate over arr
    for (let i = 0; i < arr.length; i++) {
        // check if index is even
        if (i % 2 === 0) {
            // -> push to result array
            result.push(arr[i])
        }
    }
    return result 
}

function removeEveryOther(arr) {
    return arr.filter((element, index) => index % 2 === 0)
}
const res = removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log(res)
// [1, 3, 5, 7, 9]