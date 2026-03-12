//.hasOwnProperty() method checks whether an object has a property directly on itself,
// not inherited from its prototype chain.

const user = {
    name: "Noora",
    age: 25
  };
  
  console.log(user.hasOwnProperty("name")); // true ✅
  console.log("toString" in user);      // ✅ true (inherited)
  console.log(user.hasOwnProperty("toString")); // false ❌ (inherited from Object.prototype)
  

  // 🔹 What are Object Methods?
  // In JS, objects can have properties (data) and methods (functions attached to them).
  // A method is just a function stored as a property of an object.

  //1. Defining methods inside objects
const person = {
  name: "Noora",
  age: 22,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); 

//2. Shorthand method syntax

const car = {
  brand: "Tesla",
  drive() {
    console.log("Driving...");
  }
};

car.drive();

//3. Object.keys() - Returns an array of keys.
const userr = { id: 1, name: "Alice", role: "Admin" };
console.log(Object.keys(userr)); 

//4. Object.values() - Returns an array of values.
console.log(Object.values(userr));

//5. Object.entries() - Returns key-value pairs as arrays.
console.log(Object.entries(userr));

//6. Object.assign()  - Copies properties from one object to another.
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log('Target:',target); 

//7. Object.freeze() - Makes an object immutable (can’t add/remove/change properties).
const config = { debug: true };
Object.freeze(config);
config.debug = false; // ❌ ignored
console.log(config.debug); // true

//8. Object.seal() - Prevents adding/removing properties, but allows modification of existing ones.
const settings = { theme: "dark" };
Object.seal(settings);
settings.theme = "light"; // ✅ allowed
settings.mode = "admin";  // ❌ ignored
console.log(settings); // { theme: "light" }

//9.Object.create() -  Creates a new object with a specified prototype.
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats); // true (inherited from prototype)
console.log(dog);
console.log(dog.barks);
console.log(animal.eats)

//10. hasOwnProperty() - Checks if a property belongs to the object itself (not inherited).
console.log(dog.hasOwnProperty("barks"));
console.log(dog.hasOwnProperty("eats"));


//how to make a nested object immutable?
const obj = {
  name: 'Noora',
  age: 21,
  id: 125135,
  address: {
    street: '123#Al-street',
    pin: 89401,
    state: 'Arizona'
  },
  random:null
}
Object.freeze(obj);
obj.address.state = 'Florida';
console.log(obj)
console.log(obj.address.state)

// Object.defineProperty(obj, "employed", {
//   value: false,
//   writable: false,
//   configurable: false,
//   enumerable: true
// })
for(let key in obj){
  console.log(typeof obj[key])
}
console.log(Object.isFrozen(obj))



function deepFroze(obj){
  Object.freeze(obj);

  for(let key in obj){
    if(typeof obj[key] === 'object' &&
      obj[key] !== null &&
      !Object.isFrozen(obj[key])
    ){
      deepFroze(obj[key])
    }
  }

  return obj;
}

const user2 = {
  name: "Noorr",
  details: {
    age: 22,
    country: "India"
  }
};

deepFroze(user2);
user2.details.age = 1;
console.log(user2.details.age)
console.log(user2)