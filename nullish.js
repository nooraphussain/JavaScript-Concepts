//The nullish coalescing operator (??) is used to provide a default value only when
// the left-hand side is null or undefined.

let value = 123 ?? "hehe"
console.log(value)

let a;
let b = 'yum'
let x = a ?? b;
console.log(x)



let j = 'yuppee!'
let k = null ?? j;
console.log(k)

//Best use case:
//When you want to allow false, 0, or "" — but still provide a fallback only if the value is truly missing.