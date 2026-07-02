const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","batman","wonderwoman"];

//marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);


//concat:Combines two or more arrays. This method returns a new array without modifying any existing arrays. 
const allHeros=dc_heros.concat(marvel_heros);
console.log(allHeros);

//spread(...obj1,...obj2):
const allNewHeors=[...marvel_heros,...dc_heros];
console.log(allNewHeors);

const arr1=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(arr1);

//flat:Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const useArr1=arr1.flat(Infinity);
console.log(useArr1);

console.log(Array.isArray("victus"));//check array or not

//from:Creates an array from an iterable object.
console.log(Array.from("Victus"));


//important
console.log(Array.from({name:"victus"}));

let score1=100;
let score2=200;
let score3=300;
//.of:Returns a new array from a set of elements.
console.log(Array.of(score1,score2,score3));








