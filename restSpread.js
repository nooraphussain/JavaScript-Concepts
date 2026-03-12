//The rest operator collects multiple arguments or elements into a single array.

function example(...args) {
    console.log(args); // array of all arguments passed
  }

//1. In function parameters (to accept variable number of arguments):
function sum(...numbers){
    return numbers.reduce((sum, v) => sum+v, 0);
}
console.log(sum(1,2,3,4,5,6))
  

//2. Array destructuring:
const [first, ...rest] = [10,20,30,40,50];
console.log(first);
console.log(rest);

//3. Object destructuring:
const user = { name: "Noora", age: 22, city: "Kochi" };
const {name, ...otherInfor} = user;

console.log(name);
console.log(otherInfor);


//Rest: collects values into an array (used in function params, destructuring)
//Spread: spreads values out (used in function calls, array/object cloning)
//The spread operator expands (or “spreads”) elements of an array, object, or iterable into individual elements.

const names = ["Alice", "Bob"];
console.log(...names); // acts like logNames("Alice", "Bob")


//1. Copying arrays
const arr1 = [1,2,3,4];
const arr2 = [...arr1];
console.log(arr1, arr2);

//2. Merging arrays
const merged = [...arr1, ...arr2];
console.log(merged)

//3. Spreading in function calls
const nums = [4,6,21,6,8,95];
console.log(Math.max(...nums));

//4. Copying objects
const userInfo = { name: "Noora", age: 22 };
const copy = { ...userInfo };
console.log(copy);


//5. Merging objects
const place = {city : 'Kochi'};
const merge = {...userInfo, ...place};
console.log(merge);


//Spread creates a shallow copy — nested objects/arrays still reference the original.
//Works with iterables (arrays, strings, sets) and plain objects.