// callback function is:
//A function passed as an argument to another function, so that it can be called (invoked) later.

function sayHello(name){
    console.log(`Hello ${name}!!!`);
}

function greetUser(callback){
    let user = "Noora";
    callback(user);
}

greetUser(sayHello)


//Callback functions are used to handle code that runs later, often when:

// You want to run custom behavior after something else happens.
// You're dealing with asynchronous operations (like API calls, timeouts, file reads).
// You want to make your code more reusable and flexible.
