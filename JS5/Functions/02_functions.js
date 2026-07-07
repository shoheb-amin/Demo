/** this keyword:
 * The this keyword in JavaScript refers to the object that is currently executing the function.
 * Its value depends on how the function is called, not where it is written.
*/

const user={
    username:"shoheb",
    price:65678,
    welcomeMessage:function(){
        console.log(`${this.username},welocme to website`);
    }
}
user.welcomeMessage();
user.username="sam";
user.welcomeMessage();
console.log(this);

//Arrow Function:An arrow function is a shorter way to write a function in JavaScript. It was introduced in ES6 (ECMAScript 2015).
const victus=()=>{
    let username="hitesh"
    console.log(this);
}
victus();

const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(5,3));

//implicit return:Implicit return means an arrow function automatically returns the result of a single expression, so you don't need to write the return keyword.
const addThree=(num1,num2,num3)=>num1+num2+num3
console.log(addThree(2,5,6));

const addOne=(num1)=>num1+1
console.log(addOne(5));

//object in array function:
const addFour=(num1,num2,num3,num4)=>({username:"hitesh"})
console.log(addFour(2,3,4,5));

//Immediately Invoked Function Expressions(IIFE):
/**IIFE stands for Immediately Invoked Function Expression.
 * It is a function that is created and executed immediately after it is defined.
 */
(function db(){
    //named iife
    console.log('DB connected');
})();

((name)=>{
    //unnamed iife
    console.log(`DB Connected Two: ${name}`);
    
})("Hitesh");










