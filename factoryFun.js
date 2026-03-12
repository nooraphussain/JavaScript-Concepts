// A factory function in JavaScript is simply a function that returns a new object every time it’s called.
// Unlike a constructor function (which uses new) or a class, a factory function doesn’t rely on prototypes or this.

function createPerson(name, age) {
    return {
        name,
        age,
        introduce() {
            console.log(`Hi my name is ${this.name}, I'm ${this.age}.`);
        }
    };
}

const person1 = createPerson("Noora", 21);
const person2 = createPerson("Ayaan", 25);

person1.introduce(); // Hi my name is Noora, I'm 21.
person2.introduce(); // Hi my name is Ayaan, I'm 25.
