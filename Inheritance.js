//1. prototype-based

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log(`Hello, I'm ${this.name}, ${this.age} years old- PROTOTYPE`);
}

const user = new Person('Noora', 21);
user.greet()


//2. class based 
class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, I'm ${this.name}, ${this.age} years old- CLASS`);
    }
}

class Student extends Person2{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }

    score(){
        console.log(`${this.name} scored ${this.grade}`);
    }
}

const student = new Student('Noora', 21, 98);
student.greet()
student.score()

//3. Object.create();
const animal = {eats : true};
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks);
console.log(dog.eats);
console.log(dog.hasOwnProperty("barks"))
console.log(dog.hasOwnProperty("eats"))
