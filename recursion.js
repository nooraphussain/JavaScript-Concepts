// Recursion is when a function calls itself to solve a smaller version of the same problem, until it reaches a base case (the point where it stops).

// 📌 Structure of a Recursive Function
// Every recursive function has 2 parts:
// Base case → When to stop recursion
// Recursive case → How the function calls itself with a smaller input



// There are only 4 major recursion patterns:

// -Linear (n → n-1)
// -Divide & Conquer (split in half)
// -Backtracking (decision tree)
// -Tree Traversal:


//I -Linear (n → n-1) 
// 1. ⁠Factorial of a number 
function factorial(n){
    if(n===1) return 1;
    return n* factorial(n-1);
}
console.log('Factorial:', factorial(5))

// 2. ⁠Sum of first N natural numbers 
function sumOfN(n){
    if(n<=1) return 1;
    return n + sumOfN(n-1)
}
console.log('Sum of first N:', sumOfN(5))

// 3. ⁠Count digits of a number 
function countDigits(n){
    if(n < 1) return 0;
    return 1 + countDigits(Math.floor(n/10))
}
console.log('Number of digits:', countDigits(12443))

// 4. Sum of Digits
function sumOfDigits(n){
    if(n===0) return 0;
    return (n%10) + sumOfDigits(Math.trunc(n/10))
}
console.log('Sum of Digits:', sumOfDigits(1423))

// 5. Reverse a Number
function reverseNum(n, rev = 0){
    if(n == 0) return rev;
    return  reverseNum(Math.floor(n/10) , rev * 10 + (n%10))
}
console.log('Reversed number:', reverseNum(1234)
)


// 6. Print numbers from 1 to N / N to 1 
function print1toN(n){
    if(n<1) return;
    print1toN(n-1);
    console.log(n);
}
console.log('Printing from 1 to N:')
print1toN(5)

function printNto1(n){
    if(n<1) return;
    console.log(n)
    printNto1(n-1);
}
console.log('Printing from N to 1');
printNto1(5)


// 7. ⁠Fibonacci number 
function fib(n){
    if(n<=1) return n;
    return fib(n-1) + fib(n-2);
}
console.log('Fibonacci number at n:', fib(6))


// Array Linear Recursion
// 8. ⁠Linear search
function linearSearch(arr, target, index = 0){
    if(index === arr.length) return -1;
    if(arr[index] === target) return index;
    return linearSearch(arr, target, index+1)
}
console.log('Linear search the array:', linearSearch([2,3,5,76,1,5,32],1))


// 11. ⁠Binary search 
function binarySearch(arr, target, left=0, right=arr.length-1){
    if(left>right) return -1;
    let mid = Math.floor((left+right)/2);
    if(arr[mid] === target) return mid;
    if(arr[mid] < target){
        return binarySearch(arr, target, mid+1, right)
    }else{
        return binarySearch(arr, target, left, mid-1)
    }
}
console.log('Binary search the array:',binarySearch([1,3,5,7,9], 7));

// 12. ⁠Check if an array is sorted 
function isSorted(arr, i=0){
    if(i == arr.length-1) return true;
    if(arr[i] > arr[i+1]) return false;
    return isSorted(arr, i+1)
}
console.log('Array is sorted:', isSorted([2,3,5]))
console.log('Array is sorted:', isSorted([2,9,1,3,5]))

// 13. Find Maximum Element
function findMax(arr, i=0){
    if(i == arr.length-1) return arr[i];
    return Math.max(arr[i], findMax(arr, i+1))
}
console.log('Max value in array:', findMax([12,74,23,72,86,83,11,56]));

// 14. ⁠Sum of an array 
function sum(arr){
    if(arr.length === 0) return 0;
    return arr[0] + sum(arr.slice(1));
}
console.log('Sum of array:', sum([1,2,3,4]))


// 15. Count Occurrences of Element
function countOccurences(arr, target, i=0){
    if(i=== arr.length) return 0;
    return (arr[i] === target ? 1 : 0) + 
        countOccurences(arr, target, i+1) 
}
console.log('Number of occurences:', countOccurences([1,2,3,2,3,5,2], 2))

//String Linear Recursion
// 16. ⁠Reverse a string 
function reverseString(str){
    if(str.length <= 1) return str;
    return reverseString(str.slice(1)) + str[0]
}
console.log('Reverse:',reverseString('hello'))

// 17. ⁠Check if a string is a palindrome 
function isPalindrome(str){
    if(str.length <= 1) return true;
    if(str[0] !== str[str.length-1]) return false;
    return isPalindrome(str.slice(1,-1))
}
console.log('Is palindrome',isPalindrome('madam'));
console.log('Is palindrome',isPalindrome('hello'))


// 18. Remove Character from String
function removeChar(str, char){
    if(str.length === 0) return '';
    if(str[0] === char) return removeChar(str.slice(1), char);
    return str[0] +  removeChar(str.slice(1), char);
}
console.log('Remove char:', removeChar('Hello', 'o'))

//Mathematical Linear Recursion
// 19. Product of Array
function productOfArr(arr, i=0){
    if(i === arr.length) return 1;
    return arr[i] * productOfArr(arr, i+1)
}
console.log('Product of array:', productOfArr([1,2,3]))






//12. Reverse Linked List (Recursively)
//13. Merge Two Sorted Lists
//14. Power(x, n)
//15. All Permutations of String
//16. 

