//Regular Expressions (RegEx) are super powerful in searching, matching, and replacing 
 //text patterns in JavaScript.

let regex1 = /hello/;
let regex2 = new RegExp("hi")

const pattern = /cat/;


//.test()
console.log(regex1.test("hello, I'm Noora"))
console.log(regex2.test("hi, I'm Noora"))
console.log(pattern.test("I have a cat")); // true
console.log(pattern.test("I have a dog")); // false


//.match()
const str = "hello hello world";
console.log(str.match(/hello/g)); // [ 'hello', 'hello' ]


//.replace()
const string = "I love cats and cats are cute";
console.log(string.replace(/cats/g, "dogs")); 
console.log(string.replace("love", "like"));

//.split() → splits string using regex
const fruits = "apple,banana;grape|orange";
console.log(fruits.split(/[,;|]/)); 

