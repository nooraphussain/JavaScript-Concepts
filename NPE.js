//A Null Pointer Exception occurs when you try to access a property or call
// a method on a null (or undefined) value — i.e., when the variable you're using doesn't point to a valid object.

let user = null;
console.log(user.name);  // ❌ TypeError: Cannot read properties of null

//solutions:

//1.Check before accessing:
if (user !== null && user !== undefined) {
    console.log(user.name);
  }

console.log(user?.name);  // ✅ Safely returns undefined

//2.Use Optional Chaining:
console.log(user?.name);  // ✅ Safely returns undefined

//3. Default values:
const name = user?.name || "Guest";


