console.log({} === {});
console.log({} == {});

//Objects are compared by reference, not by value.

const user1 = { name: "Noorr" };
const user2 = { name: "Noorr" };

console.log(user1.name === user2.name);
console.log(JSON.stringify(user1) === JSON.stringify(user2));
//Two objects are equal only if they reference the SAME object in memory.
