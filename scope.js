//In JavaScript, var declarations are function-scoped,
// meaning they're accessible throughout the entire function they're defined in,
// even if declared inside a block (like an if statement).
//let and const, however, are block-scoped.
// They are only accessible within the block where they are defined.


function example(){
    if(true){
        var functionalscopped = "Accessable anywhere inside the function."
        let blockScope = "I'm blockscopped."
        console.log(blockScope);
    }
    console.log(functionalscopped);
    //console.log(blockScope);
}
example()