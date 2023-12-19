/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091
The main idea is to count all the occurring character in a string.
If you have a string like aba, then the result should be {'a':2, 'b':1},
What is the string is empty? Then the result should be an empty object literal, {}.
*/

const count = s => {
    // create an empty object
    let obj = {};
    //iterate over the string
    s.split('').forEach(char => {
        // is this char a key in the object?
        if(obj[char]) {
            // if yes: increment the value
            onj[char]++
        } else {
            // if not: add the ley with value one
            obj[char] = 1;
        }
    })
    return obj;
}
