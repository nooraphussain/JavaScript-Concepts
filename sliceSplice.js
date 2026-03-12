//splice() → Mutates the original array
//array.splice(startIndex, deleteCount, item1, item2, ...)
//Purpose: Add, remove, or replace elements in an array.

let array = [0,1,2,3,4,5,6,7,8,9,10,11,12];
array.splice(4,2,"h")
console.log(array)


//slice() → Does NOT mutate the original array
//array.slice(startIndex, endIndex)
const arr = [1, 2, 3, 4, 5];
const part = arr.slice(1, 4); // elements from index 1 to 3
console.log(part); // [2, 3, 4]
console.log(arr);  // [1, 2, 3, 4, 5] → original unchanged
