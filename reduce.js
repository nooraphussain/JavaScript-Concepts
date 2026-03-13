//highest even number from an array using reduce
let arr = [1,2,3,4,5,6,7];

let highestEven = arr.reduce((acc, curr) => {
    if(curr%2 == 0){
        return acc > curr ? acc : curr
    }
    return acc;
}, arr[0])
console.log(highestEven)

//- Array.reduce: sum of positive numbers in a mixed array
let arr2 = [1,-2,2,-8,0,3,-12,-42,4]
let sumOfPos =  arr2.reduce((acc, curr) => {
    if(curr>0) return acc+ curr;
    return acc;
},0)
console.log(sumOfPos)

