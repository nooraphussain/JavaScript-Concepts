//ternary operators (also called conditional operators) in JavaScript


// The ternary operator is a shortcut for if...else.
// It evaluates a condition and returns a value based on whether the condition is true or false.

// Syntax:
//  condition ? valueIfTrue : valueIfFalse


//2.1 Assigning a value
let age = 18;
let canVote = age >= 18 ? "Yes, can vote" : "No, too young";
console.log(canVote);


let number = 10;
let parity = number % 2 === 0 ? "Even" : "Odd";
console.log(parity); // Even

//2.2 Inline in console.log()
let temp = 35;
console.log(temp > 30 ? "Hot" : "Cool"); // Hot

//3.3 Nested Ternary (Advanced)
let marks = 85;
let grade = marks >= 90 ? "A+" :
            marks >= 80 ? "A" :
            marks >= 70 ? "B" : "C";

console.log(grade); // A

