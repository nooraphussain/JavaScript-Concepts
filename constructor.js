//A constructor function is a regular function used to create and initialize objects.
// It's a blueprint for creating multiple objects with the same structure and behavior.

function Person (name, age){
    this.name = name;
    this.age = age;
}

const user = new Person("Noora", 21);
console.log(user)


// What new does:

// Creates a new empty object.
// Sets the prototype of that object to Person.prototype.
// Binds this inside the function to the new object.
// Returns the new object.

Person.prototype.greet = function() {
    console.log("Hi, I'm " + this.name);
};

user.greet(); // "Hi, I'm Noora"

//Constructor chaining
//1. parent - child chaining

class Animal{
    constructor(name){
        this.name = name;
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
}
const d = new Dog("Max", 'pug');
console.log(d)


//2. Same-class constructor chaining

class User{
    constructor(name){
        this.name = name;
        this.init()
    }

    init(){
        this.role = 'guest';
    }
}