const obj1 = {name: 'Noora'};
const obj2 = {};


//1. Object.keys;
console.log(Object.keys(obj1).length === 0 ? 'Empty': 'Not empty');
console.log(Object.keys(obj2).length === 0 ? 'Empty': 'Not empty');

//2. Object.entries;
console.log(Object.entries(obj1).length === 0 ? 'Empty': 'Not empty');
console.log(Object.entries(obj2).length === 0 ? 'Empty': 'Not empty');


//3. Object.values;
console.log(Object.values(obj1).length === 0 ? 'Empty': 'Not empty');
console.log(Object.values(obj2).length === 0 ? 'Empty': 'Not empty');

//4. for...in

const obj3 = {name: 'Noora'};
const obj4 = {};
for(let key in obj3){
    if(obj1.hasOwnProperty(key)){
        console.log('Not emptyyy')
        break;
    }
    console.log('Empty')
}

for(let key in obj4){
    if(obj2.hasOwnProperty(key)){
        console.log('Not empty');
        break;
    }else{
        console.log('...Empty');
        break;
    }
}

//5. json trick
if(JSON.stringify(obj3) === '{}'){
    console.log('Empty')
}else{
    console.log('LNot Empty')
}

if(JSON.stringify(obj4) === '{}'){
    console.log('XEmpty')
}else{
    console.log('Not Empty')
}

//6.function
function isEmpty(obj){
    return console.log(Object.keys(obj).length === 0 && obj.constructor === Object);
}

isEmpty([]); // false (good)
isEmpty(new Date()); // false (good)
isEmpty(Object.create(null)); // true (still valid)
