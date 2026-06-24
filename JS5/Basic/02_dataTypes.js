"use strict";//treat all js code as newer version
//alert(3+3) //we are using nodejs, not broweser

console.log(2+3)

let name="string"
let age=18
let isLoggedIn=false
/*
Primitive Data Types:
1.number =>2 to power 53
2.bigint
3.string => ""
4.boolean =>true/false
5.null => standalone value->typeOf->object
6.undefined => variable is decleard but not defined/given ->typeOf-> undefined
7.symbol => used for unique*/

/* 
Non-Primitive(Refrence Typel) Data Types:
1.Objects
2.Array
3.Function
4.CheckDataTypes:use to check which type of data it is.
*/
console.log(typeof age)
console.log(typeof undefined)
console.log(typeof null)

/**DataTypes Summary
 * JS is Dynamic Type language
 */

const id=Symbol('345678')
const anotherId=Symbol('345678')
console.log(id===anotherId);
//return false because both have different refrence

/***Memory-
 * is the storage area where JavaScript keeps variables, objects, functions, and data while a program is running
 * Types of Memory-Two
 * Stack Memory-
 *              1.Store Primitive Data.
 *              2.Faster Access.
 *              3.Store a Copy of the value.
 *              4.change is done on copy var.
 * Heap Memory-
 *              1.Store Objects, Arrays, Functions
 *              2.Variables store a refrence to the data
 *              3.change is done on original value
 */


