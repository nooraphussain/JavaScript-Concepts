//Optional Chaining is a feature in JavaScript (?.) that safely accesses deeply nested properties
// in an object without causing errors if a reference is undefined or null.

const user = {
    profile: {
      name: 'Noora',
      address: {
        street: "121 street",
        pincode: 232451
      }
    }
  };
  
console.log(user.profile.name); // ✅ Noora
//console.log(user.contact.email); // ❌ Error: Cannot read property 'email' of undefined
console.log(user?.email);
console.log(user.email);
console.log(user.profile.address?.pincode)

const functions = {
    greet: () => 'Hello!'
  };
  
  console.log(functions.greet?.());  // 'Hello!'
  console.log(functions.sayBye?.()); // undefined (no error)


  const data = {
    items: [1, 2, 3]
  };
  
  console.log(data.items?.[0]); // 1
  console.log(data.users?.[0]); // undefined
  
  