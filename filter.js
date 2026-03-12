//1. Keep numbers greater than 3
let nums = [1, 2, 3, 4, 5];
let result = nums.filter(num => num > 3);
console.log(result);

//2. Remove all 2s
let nums2 = [1, 2, 3, 2, 4];
let removeAllTwos = nums2.filter(num => num!==2);
console.log(removeAllTwos);

//3. Even Numbers
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(num => num %2 ==0);
console.log(evens)

//4. Keep words longer than 4 letters
let words = ["cat", "elephant", "dog", "tiger"];
let longerWords = words.filter(word => word.length > 4);
console.log(longerWords);

//5. Objects (VERY IMPORTANT)
let users = [
    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true }
  ];
let activeUsers = users.filter(user => user.active);
console.log(activeUsers)

//6. Using index
let arr = [10, 20, 30, 40];
let evenIndex = arr.filter((num, index) => index%2==0);
console.log(evenIndex);

//7. Remove Duplicates
let numss = [4,1, 2, 2, 3, 4, 4];
let unique = numss.filter((num, index, arr) => {
    return arr.indexOf(num) === index;
})
console.log(unique);

//8. Filter + includes()
let arr1 = [1,2,3,4,4];
let arr2 = [2,4];

let res = arr1.filter(num => arr2.includes(num));
console.log(res);
    //intersection;
let intersection = arr2.filter(num => res.includes(num));
console.log(intersection);

//9. Chain with map
let nums3 = [1,2,3,4,5];

let result3 = nums
    .filter(num => num % 2 === 0)
    .map(num => num * 10);

console.log(result3); 

