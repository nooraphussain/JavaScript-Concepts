// sum of positive numbers in a mixed array
const arr = [1, -2, 3, 0, -5, 10];
console.log(arr.filter(v => v>0).reduce((acc, val) =>  acc+val,0))


console.log(Math.floor(Math.random() * 100000))

let array = [1,2,3]

// push(): Adds an element to the end of the array.
array.push(4,5,);
console.log(array.push()); //size of array
console.log(array)

// pop(): Removes the last element from the array and returns it.
console.log(array.pop());
console.log(array);

// shift(): Removes the first element from the array and returns it.
console.log(array.shift());
console.log(array);

// unshift(): Adds one or more elements to the beginning of the array.
console.log(array.unshift(9)); //size of array
console.log(array);

// splice(): Adds/removes elements at a specified index.
console.log(array.splice(1,2,8,7)) //deleted elements
console.log(array)

// slice(): Extracts a section of the array without modifying the original array.
console.log('extracted array:', array.slice(1,3))

// concat(): Combines two or more arrays into a new array.
let combined = arr.concat(array);
console.log(combined)

// indexOf(): Returns the first index of the element, or -1 if it’s not found.
console.log(array)
console.log(array.indexOf(8))

// Array.isArray() : To check if a variable is an array or not
console.log(Array.isArray(array))