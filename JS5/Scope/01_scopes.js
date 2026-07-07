/**
 * Scope in JavaScript determines where a variable can be accessed.

Think of scope like rooms in a house:

A variable declared in one room can only be used in that room unless it's declared in a larger area (like the whole house).
 */

/**Types of Scope:
 * Global Scope:A variable declared outside any function or block is called a global variable.
 * Function Scope:Variables declared with var inside a function can only be used inside that function.
 * Block Scope:Variables declared with let or const exist only inside the block ({}) where they are declared.
 */

function one(){
    const username="hitesh";
    function two(){
        const website="Youtube";
        console.log(username);
    }
    //console.log(website);
    two();
}
one();

if(true){
    const username="shoheb";
    if(username==="shoheb"){
        const website="youtube.com"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);


/**Important */
console.log(addOne(10));

function addOne(num1){
    return num1+1;
}

console.log(addTwo(5));

const addTwo=function(num){
    return num+2;
}
