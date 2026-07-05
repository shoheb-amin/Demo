//Function and Parameters:In JavaScript, a function is a reusable block of code that performs a specific task. Parameters are the variables that a function accepts as input.
function sayMyName(){
    console.log("S");
    console.log("h");
    console.log("o");
    console.log("h");
    console.log("e");
    console.log("b");
}
sayMyName();

/**
 * Parameter:A variable declared in the function definition
 * Argument:The actual value passed when calling the function
 */
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
addTwoNumbers(4,6);
const result=addTwoNumbers(4,6);
console.log(result);//output : undefined

function subTwoNumbers(num1,num2){
    let result1=num1-num2;
    return result1;
}

const result1=subTwoNumbers(10,7);
console.log("Result:",result1);

function mulTwoNumbers(num1,num2){
    return num1*num2;
}
const result2=mulTwoNumbers(6,6);
console.log("Multiplication Of Two Numbers:",result2);


//  "===" Strict Equality Checks value and data types.
function loginUserMessage(username){
    if(username===undefined){
        console.log("Please Enter a username");
        return;
        
    }
    return `${username} just logged in`
}
const result3=loginUserMessage();
console.log("Login User Message:",result3);


function calcCartPrice(...num1){
    return num1;
}
console.log(calcCartPrice(400,678,345,678,345,675,344));

//passing object
const user={
    username:"victus",
    price:6789
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username:"Shoheb",
    price:56789
})

//passing array
const newArray=[67,567,98,6];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(newArray));
console.log(returnSecondValue([67,567,98,6]));






