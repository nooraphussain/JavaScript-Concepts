//Pure function
//Gives the same output for the same input, and
//Has no side effects (it doesn’t change or depend on anything outside itself).

const add = (a,b) => a+b;
console.log(add(2,3));
console.log(add(2,3));
console.log(add(2,3));

// Why Pure Functions Matter:
// Easier to test
// Predictable behavior
// Debug-friendly
// Great for functional programming and tools like Redux


// Write a pure function to sum only positive numbers in an array.
function postiveSum(arr){
    return arr.filter(v => v>0).reduce((acc, val) => acc+val, 0);
}
console.log(postiveSum([-1,2,3,-4,4,1,0]))

// Write a pure function to capitalize all strings in an array.
function capitalize(arr){
    return arr.map(v => v.toUpperCase());
}
console.log(capitalize(['hello', 'world'])); 


// Convert an impure function with side effects into a pure function.
let count = 1;
function counter(){
    console.log(count);
    count++;
}
counter()
counter()
counter()

let x = 1
function counter2(count){
    console.log(count)
    return count+1;
}
counter2(x)
counter2(x)
counter2(x)


// Write a pure function to deep clone an object and update a property.
function pureFun (obj, key , value){
    const clone = structuredClone(obj);
    clone[key] = value;
    return clone;
}

const user = {name: 'Noora'};
updatedUser = pureFun(user, 'age', 21)
console.log(user);
console.log(updatedUser);
