//Currying is a technique of transforming a function that takes multiple arguments
// into a series of functions that take one argument at a time.

function multiplyA(a){
    return function multiplyB(b){
        return function multiplyC(c){
            return a*b*c;
        }
    }
}

console.log(multiplyA(3)(4)(5))

const add = a => b => c => a+b+c;
console.log(add(1)(2)(3))


//real life problem 
const log = type => message => console.log(`[${type.toUpperCase()}] ${message}`);
const info = log('info')
const error = log('error')
info('Server started')
error('Failed to connect')

// Benefits:

// Reusability
// Separation of concerns
// Cleaner, modular code

