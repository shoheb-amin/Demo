/**
 * Control Flow:What is Control Flow in JavaScript?
 * Control flow is the order in which JavaScript executes your code.
 * It decides which statements run, when they run, and how many times they run.
 */


//if statement:Executes code only if a condition is true.
if(true){

}
if(false){

}

const isUserLoggedIn=true
if(isUserLoggedIn){

}
//<,> <=,>=,==,!=,===,!==

//short notation
const bal=1000;
if(bal>900) console.log("test"),console.log("bank is active");

//if-else:choose b/w two block.
let age=16;
if(age>16){
    console.log("can vote!");
}else{
    console.log("cannot vote!");
}

//if/else if/else:Checks multiple conditions
let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

//const isUserLoggedIn=true;
const debitCard=true;
if(isUserLoggedIn && debitCard){
    console.log("allow to buy phone.");
}

const logFromGoogle=true;
const logFromEmail=true;
if(logFromEmail || logFromGoogle){
    console.log("User Logged in!");  
}

//Switch Case:Used when you have multiple possible values.
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}

/**Falsey Value:There are only a few values that JavaScript treats as false.
 * false
 * 0
 * -0
 * 0n  ->BigInt Zero
 * ""  ->Empty string
 * null
 * undefined
 * NaN
 */

/**Truthy Value:Everything is not falsy is thruthy.
 * true
 * 1
 * -1
 * 100
 * "0"
 * "false",'false'
 * "Hello"
 * []
 * {}
 * function(){}
 * 
 */


//Nullish Coalescing Operator(??): null undefined->The Nullish Coalescing Operator (??) is used to provide a default value only when the left side is null or undefined.
let val1;
let val2;
let val3;
val1=5??10
val2=null??90
val3=null??undefined;
console.log(val3);

console.log(val1);
console.log(val2);

//terniary operator:
//condition ? true : false

const agee=9;
agee>=18?console.log("age is greater than 18"):console.log("age is less than 18");








