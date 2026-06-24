const score=400;
console.log(score);
const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);

//toFixed:Returns a string representing a number in fixed-point notation
console.log(balance.toFixed(3));


const otherNumber=23.8977
//toPrecision:Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
console.log(otherNumber.toPrecision(4));

//toLocaleString-Converts a number to a string by using the current or specified locale.
const hundreds=10000000;
console.log(hundreds.toLocaleString('en-IN'));

//Math-An intrinsic object that provides basic mathematics functionality and constants
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5678));
console.log(Math.ceil(4567.456789));
console.log(Math.floor(3456789.345678));
console.log(Math.min(2,3,4,5,2,1,2));
console.log(Math.max(2,34,56,3,2));
console.log(Math.random());//random:Returns a pseudorandom number between 0 and 1.
console.log((Math.random()*10)+1)

const min=1
const max=6

console.log(Math.floor(Math.random() * (max-min+1)) +min)













