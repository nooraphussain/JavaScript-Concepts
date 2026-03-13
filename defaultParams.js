//A default parameter is a value automatically assigned to a function argument when
// the caller does not provide that argument or passes undefined.

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  
  greet("Noorr");  // Hello, Noorr!
  greet();         // Hello, Guest!

// name = "Guest" → default value.
// If the caller provides a value → it overrides the default.



//Multiple Default Parameters
function createUser(name = "Guest", age = 18, city = "Unknown") {
    console.log(name, age, city);
  }
  
  createUser();                  // Guest 18 Unknown
  createUser("Alex", 25);        // Alex 25 Unknown
  createUser("Noorr", 22, "Calicut"); // Noorr 22 Calicut


//Only undefined triggers default
function test(val = 100) {
    console.log(val);
  }
  
  test(undefined); // 100
  test(null);      // null (default NOT applied)



//Using Other Parameters as Defaults
  function multiply(a, b = a * 2) {
    return a * b;
  }
  
  console.log(multiply(5)); // 5 * (5*2) = 50
  console.log(multiply(5, 3)); // 5 * 3 = 15