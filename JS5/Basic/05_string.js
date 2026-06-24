/**String Interpolation-String Interpolation means inserting variables or expressions inside a String using Template Literals(backtricks `).
 * Syntax:
 *      let name="Shoheb"
 *      console.log(`Hello ${name}`);
 *      output:Hello Shoheb
 * 
 * 
 * Advantage:
 *  1.multiple variable
 *          let name = "Shoheb";
            let age = 21;
            console.log(`My name is ${name} and I am ${age} years old.`);
            output:My name is Shoheb and I am 21 years old.
 *      
 *  2.expressions
 *          let a = 10;
            let b = 20;
            console.log(`Sum = ${a + b}`);
            output:Sum = 30
 * 
 * Note:String interpolation in JavaScript is the process of embedding variables or expressions inside a string using template literals and ${} syntax.
 */

const gamename=new String("ViceCity")
console.log(gamename[0]);
console.log(gamename.__proto__);


//String functions
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf('c'));
const newString=gamename.substring(0,5);
console.log(newString);
const anotherString=gamename.slice(-8,8);//can take negative value
console.log(anotherString);
const newString1="  Victus  ";
console.log(newString1);
console.log(newString1.trim());

const url="http://hitesh.com/hitesh%20Choudhary"
console.log(url.replace('%20','-'));







