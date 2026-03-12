//A Map stores key-value pairs where keys can be any type.
const map = new Map();
map.set('name', 'Noora');
map.set(123, 'ID');
console.log(map.get('name')); // "Noora"
console.log(map.get(123));

console.log(map.has(123)) 
console.log(map.has('ID'))


//WeakMap()
//A WeakMap is a collection of key/value pairs, where keys must be objects,
// and they are weakly referenced (not prevented from garbage collection).

const wm = new WeakMap();
let obj = { name: 'Noora' };

wm.set(obj, 'secret info');
console.log(wm.get(obj)); // 'secret info'
obj = null; // Now eligible for garbage collection
console.log(wm.get(obj)); //undefined 


const capitals = new Map([
    ["India", "New Delhi"],
    ["France", "Paris"],
    ["Japan", "Tokyo"]
  ]);
  
  // for..of
  for (let [country, capital] of capitals) {
    console.log(country, "=>", capital);
  }
  
  // forEach
  capitals.forEach((capital, country) => {
    console.log(`${country}: ${capital}`);
  });
  