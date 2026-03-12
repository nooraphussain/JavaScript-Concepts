//A polyfill is a piece of code (usually JavaScript) that implements a feature
// that the browser (or environment) does not natively support.

//Modern JS:
console.log([1,2,3].includes(2)); // true

//But older browsers (like IE) don’t have .includes.
//Polyfill:
if (!Array.prototype.includes) {
    Array.prototype.includes = function(element, fromIndex = 0) {
      return this.indexOf(element, fromIndex) !== -1;
    };
  }
  
//   Polyfill = backward compatibility.

//   Checks if a feature exists → if not, defines it.
  
//   Commonly written for Promise, fetch, Object.assign, Array.includes, etc.
  
//   In production, people use core-js instead of manually writing all polyfills.