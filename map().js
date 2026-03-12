//Functional programming techniques - map, filter, reduce

//map

//Double each number
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); 

//Print index
const array = ['a', 'd', 'e'];
const result = array.map((char, i) => `${i}: ${char}`)
console.log(result);

//double alternate index values
let nums = [2,5,8,1,9,0];
const alternateDoubles = nums.map((v, i) => {
    return i%2 === 0 ? v*2 : v ;
});
console.log("Alternate doubles:" ,alternateDoubles);

//Convert numbers to strings
let arr = [1,2,3];
const numToString = arr.map(v => v.toString())
console.log("numbers to string:", numToString)
const numToStrings = arr.map(String);
console.log(numToStrings)


//Add index to each value
let elements = [10,20,30];
const indexAdded = elements.map((v, i) => v+i);
console.log(indexAdded)

//Capitalize first letter of names
let names = ["risla", "maji", "harshi"];
const capitalised = names.map(name => name[0].toUpperCase() + name.slice(1))
console.log(capitalised);

//If even, double; if odd, triple
let elems = [1,2,3,4,5,6];
const doubleTriple = elems.map(v => {
    return v%2 === 0 ? v*2 : v*3;
})
console.log(doubleTriple);

//Extract names from array of objects
const users = [
    { id: 1, name: "Noora" },
    { id: 2, name: "Risla" },
    { id: 3, name: "Maji" },
    { id: 4, name: "Harshi" }
  ];
const namess = users.map(user => user.name);
console.log(namess);

//Add a new property to each object (without mutating original)
const updatedUsers = users.map(user => ({
    ...user,
    isActive: true
}));
console.log(updatedUsers);

//Double each number in a nested array
const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
const doubledMatrix = matrix.map(arr => arr.map(e => e*2));
console.log(doubledMatrix);


//Extract all first elements from nested arrays
const pairs = [
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ];
const firstElems = pairs.map(v => v[0]);
console.log(firstElems);

//Format user data for frontend display
const rawUsers = [
    { firstName: "risla", lastName: "sherin", age: 19 },
    { firstName: "majida", lastName: "lubana", age: 25 }
  ];
const formatted = rawUsers.map(user => ({
    fullName : `${user.firstName[0].toUpperCase() + user.firstName.slice(1)} ${user.lastName[0].toUpperCase() + user.lastName.slice(1)}`,
    age : user.age
}));
console.log(formatted)

//Transform exam scores from nested structure
const students = [
    { name: "Noora", scores: [80, 90, 100] },
    { name: "Risla", scores: [70, 60, 80] }
  ];
const avgScore = students.map(student => ({
    name : student.name,
    avgScore: student.scores.reduce((sum, s) => sum+s, 0)/ student.scores.length
}))
console.log(avgScore)

//Flatten simple nested array with .map() + .flat()
const nested = [[1, 2], [3, 4], [5, 6]];
const flatten = nested.map(v => v).flat()
console.log(flatten)

//String length
const strings = ["banana", "mango", "apple"];
const lengthOfStrings = strings.map(v => `${v.toUpperCase()}-LENGTH:${v.length}`);
console.log(lengthOfStrings)

//Extract usernames from object array
const users2 = [
    { id: 101, username: "noora" },
    { id: 102, username: "maji" },
    { id: 103, username: "risla" }
  ];
const usernames = users2.map(user => user.username);
console.log(usernames);

//Add a “role” property to each user
const usersDetail = [
    { name: "Sana", age: 21 },
    { name: "Ali", age: 22 }
  ];
const userId = usersDetail.map(user => ({
    ...user,
    role: 'employee'
}));
console.log(userId);

// Multiply every number in nested array by 10
const data = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
const multiplied = data.map(arr => arr.map(v => v*10));
console.log(multiplied);  

//Format list of books
const books = [
    { title: "Atomic Habits", author: "James Clear" },
    { title: "Deep Work", author: "Cal Newport" }
  ];
const formatOfBook = books.map(book => `${book.title} by ${book.author}`);
console.log(formatOfBook);

//Flatten a nested array of arrays using flatMap()
const arrr = [[1, 2], [3, 4], [5, 6]];
const flat = arrr.flatMap(v => v);
console.log(flat)

//.map() + .filter()
//Double only the even numbers
const arrayOfnums = [1, 2, 3, 4, 5, 6];
const filteredDoubles = arrayOfnums.filter(x => x%2==0).map(x => x*2);
console.log(filteredDoubles);

//.map() + .reduce()
//Get total length of all words
const words = ["hi", "hello", "world"];
const totalLength = words.map(word => word.length).reduce((sum, length) => sum + length, 0);
console.log(totalLength);


//.filter() + .reduce()
//Sum only odd numbers
const numbs = [12,3,5,7,9,0];
const sumOfOdds = numbs.filter(v => v%2 !=0).reduce((sum, v) => sum+v, 0);
console.log(sumOfOdds)

//.filter() + .map() + .reduce()
//Total price of in-stock products (after discount - apply 10% discount)
const products = [
    { name: "Pen", price: 10, inStock: true },
    { name: "Pencil", price: 5, inStock: false },
    { name: "Notebook", price: 30, inStock: true }
  ];
const discountPrice = products.filter(prd => prd.inStock).map(prd =>  prd.price * 0.91).reduce((sum, price) => sum + price, 0);
console.log(discountPrice);