//trim() removes leading and trailing whitespace (spaces, tabs, line breaks) from a string.
const messy = "   hello world   ";
const clean = messy.trim();

console.log(clean);
console.log("  !hello! ".trimStart())
console.log("  !hello! ".trimEnd())

//trimStart() or trimLeft() – removes from the start
//trimEnd() or trimRight() – removes from the end


let word = "Fantastic"
console.log(word.length);
console.log(word.charAt(2));
console.log(word.indexOf("t"));
console.log(word.lastIndexOf("t"));
console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(word.substring(1,4));
console.log(word.replace("a","4"));
console.log(word.replaceAll("a","4"));