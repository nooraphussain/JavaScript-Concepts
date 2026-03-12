//A Proxy in JavaScript is an object that wraps another object (called the target)
// and intercepts operations performed on it — like reading, writing, deleting properties —
// using traps (special handler functions).

// const proxy = new Proxy(target, handler);

//target → The original object you want to wrap
//handler → An object with traps (functions) that define how operations are intercepted

// | Trap             | Purpose                     |
// | ---------------- | --------------------------- |
// | `get`            | Intercept property read     |
// | `set`            | Intercept property write    |
// | `has`            | Intercept `in` operator     |
// | `deleteProperty` | Intercept `delete obj.prop` |
// | `apply`          | Intercept function calls    |
// | `construct`      | Intercept `new` operator    |
// | `ownKeys`        | Intercept `Object.keys()`   |

const person = {};

const handler = {
  set(target, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }
    target[prop] = value;
    return true;
  }
};

const proxyPerson = new Proxy(person, handler);

proxyPerson.age = 30;  // ✅ works
proxyPerson.name = "Noora"; // ✅ works
// proxyPerson.age = "thirty"; // ❌ TypeError

const data = { name: "Noora" };

const proxyData = new Proxy(data, {
  get(target, prop) {
    return prop in target ? target[prop] : "Not Available";
  }
});

console.log(proxyData.name);  // Noora
console.log(proxyData.city);  // Not Available



const target = { name: "Noora", age: 22 };

const handlerr = {
  get: function(obj, prop) {
    console.log(`Getting ${prop}`);
    return obj[prop] ?? "Property not found";
  },
  set: function(obj, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    obj[prop] = value;
    return true; // must return true
  }
};

const proxyObj = new Proxy(target, handlerr);

console.log(proxyObj.name);   // Logs: Getting name → "Noora"
console.log(proxyObj.city);   // Logs: Getting city → "Property not found"

proxyObj.age = 25;            // Logs: Setting age to 25
console.log(proxyObj.age);    // 25


const user = {name : "Noora", age: 20};
const handler2 = {
    get(target, prop){
        console.log(`Getting property ${prop}`);
        return target[prop];
    },
    set(target, prop, val){
        console.log(`Setting new value ${val} to ${prop}`);
        target[prop] = val;
        return true;
    }
}

const proxyUser = new Proxy(user, handler2);
proxyUser.name; 
proxyUser.age = 21;