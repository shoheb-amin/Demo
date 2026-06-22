console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

console.log("String condition");
console.log("2fghjk">1);

console.log("null condition");
console.log(null>0);
console.log(null==0);
console.log(null>=0);

/**Note:
 * The reason is that an equality check == and comparisons > < >= <= work differently
 * comparison convert null to a number, treating it as 0.
 * that's why condition (3) null>=0 is true and condition (1) null>0 is false.
 */
console.log("undefind")
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined<=0);

console.log("Strict Check ===");//symbol: ===(3 equal) check the comparison and check datatype also
console.log("2"===2);

