// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
/*
Write a function to convert a name into initials. This Kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F
*/

function abbrevName(name) {
    console.log(name)
    const first = name[0]
    // index of Char after the space
    let indexAfterSpace = name.indexOf(' ') + 1;
    const second = name[name.indexOf(' ')+ 1];
    return `${first.toUpperCase()}.${second.toUpperCasse()}`
}

const abbrevName = (name) => name.split(' ').map(word => word[0].toUpperCase()).join('.')