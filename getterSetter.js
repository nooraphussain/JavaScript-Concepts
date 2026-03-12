// Q1. Basic Getter

// Create an object user with properties firstName and lastName,
// and a getter called fullName that returns "firstName lastName".

// Q2. Basic Setter

// Extend the above user object to include a setter for fullName
// which splits the assigned value and updates firstName and lastName.

const user = {
    firstName: "Noora",
    lastName: "Hussain",
    
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    
    set fullName(name){
        const [first, last] = name.split(' ');
        this.firstName = first;
        this.lastName = last;
    }
};
  
console.log(user.fullName);
user.fullName = 'Fathima Jahan';
console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);


// Q3. Getter inside a Class

// Define a class Rectangle with properties width and height.
// Add a getter area that returns the area of the rectangle.


class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area(){
        return `Area: ${this.width * this.height}`;
    }


}

const rect = new Rectangle(5, 10);
console.log(rect.area);