//deepClone means creating a new, completely independent copy of an object or array —
// including all nested objects/arrays. Unlike a shallow copy, it doesn’t share references.

const original = { name:"Noora", age: 21, skills:{js: true, mongoDB: true, angular:false}};

const shallowCopy = {...original}
shallowCopy.skills.angular = true;
console.log(original); //changes the original

//1.slice - shallowCopy
const arr = [{ name: "Noorr" }];
const copy = arr.slice();
copy[0].name = "Changed";
console.log(arr[0].name); // "Changed"

//2. concat - shallow Copy
const arr1 = [{ name: "Noorr" }];
const arr2 = [{ age: 22 }];
const result = arr1.concat(arr2);
result[0].name = "Changed";
console.log(arr1[0].name); // "Changed"



const deepCopy = JSON.parse(JSON.stringify(original))
deepCopy.skills.js = false
console.log("original: ", original);
console.log("deepCopy:", deepCopy);


//deep cloning without inbuilt methods
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    const clonedObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]); // recursive clone
      }
    }
    return clonedObj;
  }
  
