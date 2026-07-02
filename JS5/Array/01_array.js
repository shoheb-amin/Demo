/**Array: is a special global object used to store multiple values in a single variable. It organizes elements sequentially using numerical, zero-based indexing.
 * Zero-Indexed: The first element starts at 0, the second at 1, and so on.
 * Dynamic Size: Arrays automatically grow or shrink; no upfront size declaration is required.
 * Heterogeneous: A single array can mix numbers, strings, booleans, objects, or other arrays.
 * Reference Type: Under the hood, arrays are objects, meaning they copy by reference, not by value
 */

const myArr=[1,2,3,4,5];
console.log(myArr);

const myArr2=["shkatiman","Iron Man"];
console.log(myArr2);

const myArr3=new Array("Student","class",1);
console.log(myArr3);

/**Array Methods
 * push()/pop(): Adds/removes elements at the end of the array.
 * unshift()/shift(): Adds / removes elements at the beginning.
 * splice(): Adds, removes, or replaces elements at any specific index.
 * slice():extracts a portion of an array or a string and returns it as a new object without modifying the original data
 * map(): Creates a new array by applying a function to every element.
 * filter(): Creates a new array containing elements that pass a conditional test
 */

myArr.push(1);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(0);//add elements at starts
console.log(myArr);

myArr.shift();//remove elememts at starts
console.log(myArr);

const myN2=myArr
console.log("ori",myArr);
console.log("slice",myN2.slice(1,3));


/**Syntax:
 * array.splice(start, deleteCount, item1, item2, ...)
start → Where to start.
deleteCount → How many elements to remove.
item1, item2... → New elements to insert (optional). */
const myN1=myArr
console.log("ori",myArr);
console.log("splice",myN1.splice(5,6,78,54));


console.log(myArr.includes(10));
console.log(myArr.indexOf(3));

const newArr=myArr.join()//convert array into String.
console.log(myArr);
console.log(typeof newArr);
console.log(newArr);












