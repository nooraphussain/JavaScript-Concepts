// A Higher-Order Function (HOF) is a function that does one or both of the following:
// ✅ Takes another function as an argument
// ✅ Returns a function

let arr = [1,2,3,4,5]
const tens = arr.map(v => v*10)
console.log(tens)

//map(), filter(), reduce() – all HOFs

function calculate (a, b, operation){
    return operation(a,b);
}

const add = ((a,b) => a+b);
const result = calculate(4,5 , add)
console.log(result);

//| Benefit                            | Explanation                                                   |
// | ---------------------------------- | ------------------------------------------------------------- |
// | ✅ **Code Reusability**             | You can reuse logic by passing different functions.           |
// | ✅ **Abstraction**                  | Hides unnecessary details — focus on *what* to do, not *how*. |
// | ✅ **Cleaner & Shorter Code**       | Avoids writing loops, conditionals manually.                  |
// | ✅ **Functional Programming Style** | Encourages declarative, side-effect-free code.                |


function customMap(arr, fn) {
    return arr.map(fn);
  }
  
  function square(x) {
    return x * x;
  }
  
  const nums = [1, 2, 3, 4];
  const results = customMap(nums, square);
  console.log(results); 
  



function customFilter(arr, fn){
    return arr.filter(fn);
}
const numbers = [1, 2, 3, 4, 5, 6];
const isEven = n => n % 2 === 0;
const filtered = customFilter(numbers, isEven);
console.log(filtered); // [2, 4, 6]
