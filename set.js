//Set in JavaScript — it’s a built-in object that lets you store unique values of any type,
// whether primitive or object references.

const mySet = new Set([1,1,2,2,3,3,4,5]);
console.log(mySet);

//methods
//1.add

const set = new Set();
set.add('hello');
set.add(1);
set.add(true);
set.add('hello') //duplicates ignored
console.log(set);


//2.delete
set.delete(1);
console.log(set)

//3.has
console.log(set.has('hello'))
console.log(set.has(false))

//4.size
console.log(set.size);

//5.clear
set.clear()
console.log(set)


//6.iterations
set.add(1)
set.add(2)
set.add(3)
console.log(set)

//for...of
for(let val of set){
    console.log(val)
}

set.forEach(element => {
    console.log(element*10)
});












