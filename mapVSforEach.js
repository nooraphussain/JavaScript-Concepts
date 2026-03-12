// | Feature               | `map()`                 | `forEach()`                         |
// | --------------------- | ----------------------- | ----------------------------------- |
// |   Return value        | Returns a new array     | Returns undefined               |
// |   Purpos              | Transform each element  | Perform side effects (like logging) |
// |   Chainabl            | ✅ Yes                   | ❌ No                                |
// |   Mutates original    | ❌ Never                 | ❌ Never                             |

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, i) => {
  console.log(`${i + 1}. ${fruit}`);
});

const nums = [1,2,3];
let doubles = nums.map(v => v*2)
console.log(doubles)