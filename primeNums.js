//1. prime numbers upto n 
function primesUpToN(n){
    let primes = [];

    for(let i=2; i<=n; i++){
        let isPrime = true;

        for(let j=2; j<= Math.sqrt(i); j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime) primes.push(i)
    }
    return primes;
}

console.log(primesUpToN(20))

//2. Check If a Number Is Prime (True / False)
function isPrime(n){
    if(n < 2) return false;
    for(let i=2; i<= Math.sqrt(n); i++){
        if(n%i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(9)); // false



//3. Prime Number Using Recursion
function isPrimeRecursive(n, i=2){
    if(n<=2) return n === 2;
    if(n%i === 0) return false;
    if(i*i > n) return true;
    return isPrimeRecursive(n, i+1)
}

console.log(isPrimeRecursive(7))
console.log(isPrimeRecursive(9))

//4. Get All Prime Numbers From an Array
let arr = [2,3,4,5,6,7,8,9,11];
let res = arr.filter(isPrime);
console.log(res)