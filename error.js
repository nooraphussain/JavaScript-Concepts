// Runtime Errors
//Occur during execution.
// Examples:
        // TypeError
        // ReferenceError

//1. TypeError
//A value is used in a way that is not compatible with its type.

//1.1. Calling something that is not a function
let num = 10;
num(); // TypeError: num is not a function

//1.2. Accessing properties of undefined or null
let user;
console.log(user.name); //TypeError: Cannot read properties of undefined

//1.3. Using array methods on non-arrays
let x = 10;
x.push(5); //TypeError: x.push is not a function

//1.4. Invalid operations between incompatible types
let num2 = 10;
num.toUpperCase(); //TypeError: num.toUpperCase is not a function


//2. ReferenceError
//JavaScript tries to access a variable that does not exist in the current scope.

//2.1. Using an undeclared variable
console.log(x);//ReferenceError: x is not defined

function greet() {
    console.log(name);
  }
  
  greet(); //ReferenceError: name is not defined

//3. Syntax Errors
//Occurs when code violates JavaScript syntax rules.
// if(true {
//     console.log("Hello");
//   } //SyntaxError: Unexpected token '{'





//What is Error Handling?
//Error handling is the process of:
//Detecting, catching, and managing errors in a program so the application can continue
// running or provide meaningful feedback.


//1.try...catch allows you to:
//Execute code and catch errors without stopping the entire program.
try {
    // risky code
  } catch (error) {
    // runs if error occurs
  }

//Inside catch, JavaScript provides an error object containing useful information.
try {
    let x = y;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

//finally Block
//The finally block executes regardless of whether an error occurred.
try {
    // code
  } catch (error) {
    // error handling
  } finally {
    // always runs
  }


// Throwing Custom Errors

// Sometimes developers want to create their own errors.
// Use the throw keyword.
function withdraw(balance, amount) {

  if(amount > balance){
    throw new Error("Insufficient balance");
  }

  return balance - amount;
}

try{
  withdraw(100,200);
}
catch(err){
  console.log(err.message);
}


// 9. Advantages of Error Handling

// ✔ Prevents application crashes
// ✔ Provides user-friendly messages
// ✔ Improves debugging
// ✔ Allows recovery from failures
// ✔ Makes applications more robust

// 10. Disadvantages / Limitations

// ❌ Overusing try...catch can make code messy
// ❌ It cannot catch syntax errors at compile time
// ❌ May hide real issues if errors are ignored improperly