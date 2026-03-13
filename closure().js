// A closure is created when:

// A function is defined inside another function, and
// The inner function uses variables from the outer function.
// Even if the outer function has finished executing, the inner function "remembers" the variables it had access to.

function outer(){
    let count = 0;
    
    return function inner(){
        count++;
        console.log(count);
    }
}

const counter = outer()
counter();
counter();
counter();

// Why Are Closures Useful?

// Data encapsulation (private variables) - bankAcc
// Callbacks and event handlers
// Memoization and caching
// Maintaining state in async code
// Function Factories - multiplier

function createBankAccount (){
    let balance = 10000;

    return {
        deposit(amount){
            balance += amount;
            return balance;
        },

        withdraw(amount){
            balance -= amount;
            return balance;
        },

        getBalance(){
            return balance;
        }
    }
}

const account = createBankAccount();
console.log(account.deposit(200));
console.log(account.withdraw(300));
console.log(account.getBalance());


//function factories eg:
function multiplier(x){
    return function(y){
        return x * y;
    }
}

const double = multiplier(2);
console.log(double(3))
console.log(double(4))


//Drawbacks of Closures

//Memory Consumption
//Memory Leaks with DOM Elements
//Debugging Difficulty
//Hidden dependencies between functions