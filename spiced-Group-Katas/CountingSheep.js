// https://www.codewars.com/kata/54edbc7200b811e956000556

/* 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  The correct answer would be 17.
  */

 // 1. version: variable counter and a for loop 
 // check is element is true -> increment counter

  function countSheepS(arrayOfSheep) {
    let counter = 0
    for (let sheep of arrayOfSheep) {
        if (sheep) {
            counter++
        }
    }
    return counter
  }

  // 2. version: filter for 'true' and the return length

  function countSheep(arrayOfSheep) {
    return arrayOfSheep.filer.(sheep => sheep).length
  }

  const array = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

    countSheep(array) // 17
    countSheepS(array) // 17