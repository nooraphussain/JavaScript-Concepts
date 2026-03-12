// A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation.
// It can be in one of three states:

// Pending → still running
// Fulfilled → finished successfully (→ .then)
// Rejected → failed (→ .catch)

const myPromise = new Promise((resolve, reject) =>{
    let success = true;

    setTimeout(() => {
        if(success){
            resolve("Task successfully completed")
        }else{
            reject("Task failed")
        }
    }, 500);
});

myPromise
  .then(result => console.log(result))  // when resolved
  .catch(error => console.error(error)) // when rejected
  .finally(() => console.log("Promise finished")); // always runs


//   Why use Promisese
//   Avoids callback hell.
//   Makes async code readable & manageable.
//   Works beautifully with async/await



//promise.all()
// Takes an array (or iterable) of promises.
// Returns a single promise that:
// ✅ Resolves when all promises succeed, giving an array of results.
// ❌ Rejects immediately if any one promise fails.

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);
 
Promise.all([p1, p2, p3])
    .then(result => console.log(result))
    .catch(error => console.log(error));


// Promise.allSettled(iterable)
// Waits for all promises to finish (resolve OR reject).
// Always resolves, giving you the status and value/reason of each promise.

const p4 = Promise.resolve("Hello");
const p5 = Promise.reject("Bye")

Promise.allSettled([p4,p5]).then(res => console.log(res))

//Promise.race(iterable)
//Resolves/rejects as soon as the first promise settles (fastest one wins).
const p6 = new Promise(res => setTimeout(res, 1500, "first"));
const p7 = new Promise(res => setTimeout(res, 500, "second"));
Promise.race([p6, p7]).then(res => console.log(res))


//Promise.any(iterable)
//Resolves as soon as the first promise fulfills.
//Ignores rejections unless all fail → then it rejects with AggregateError.

const p8 = Promise.reject("❌ fail");
const p9 = Promise.resolve("✅ success");
const p10 = Promise.reject("❌ fail again");

Promise.any([p8, p9, p10])
  .then(val => console.log(val)) // "✅ success"
  .catch(err => console.error(err));


//Promise.resolve(value)
//Returns a resolved promise with the given value.
Promise.resolve(42).then(v => console.log(v)); // 42


//Promise.reject(reason)
//Returns a rejected promise with the given reason.
Promise.reject("hh").catch(err => console.log(err));



//handle promise using async and await
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data recieved ✅"), 2000);
    });
}

async function getData() {
    console.log("Fetching...");
    let result = await fetchData()
    console.log(result)
}

getData()

function fetchData2(){
    return new Promise((resolve, reject) => {
        (() => reject("Something went wrong😑"),2000) 
    });
}

async function getData2(){
    console.log("Fetching...");
    try{
        let res = await fetchData2();
        console.log(res)
    }catch(error){
        console.error(error)
    }
}

getData2()


//callbackhell
//Callback Hell happens when you have too many nested callbacks, usually in asynchronous code.
//It makes the code look like a “pyramid of doom” → hard to read, hard to maintain, and error-prone.


// Poor readability (“arrow pyramid” shape).
// Hard to maintain or modify.
// Error handling is messy.
// Hard to reuse parts of code



//Promisify
//promisfy means converting a function that uses callbacks (especially Node.js-style (err, result)
// callbacks) into a function that returns a Promise.


//Promise Chaining
//Linking multiple asynchronous operations together so that each .then()
// runs after the previous Promise resolves.


function step1(){
    return Promise.resolve('A')
}

function step2(prev){
    return Promise.resolve(prev + 'B')
}

function step3(prev){
    return Promise.resolve(prev + 'C')
}

step1().then(res => step2(res))
       .then(res => step3(res))
       .then(final => console.log(final))
