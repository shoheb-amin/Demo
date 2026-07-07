/**
What is Iteration in JavaScript?
Iteration means repeating a block of code multiple times until a condition is met.
JavaScript uses loops to perform iteration.

*Types of Iteration(LOOPS)
1.for Loop:Used when you know how many times you want to repeat.
        for (let i = 1; i <= 5; i++) {
            console.log(i);
        }

2.while Loop:Repeats while the condition is true.
    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }
 */

for (let i = 0; i <= 10; i++) {
  const element = i;
  console.log(element);
}

let myArr = [3, 5, 6, 4, 2];
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(element);
}

//while loop
function reverse() {
  let start = 0;
  let end = myArr.length;
  while (start < end) {
    let temp = myArr[start];
    myArr[start] = myArr[end];
    myArr[end] = temp;
    start++;
    end--;
  }
}
reverse(myArr);
console.log(myArr);

//do while loop:runs the code at least once, even if the condition is false.
let i =1;
do {
    console.log(i);
    i++;
    
} while (i<=10);

//for of loop:Used to iterate over iterable objects like arrays and strings.
const arr=[1,2,3,4,5,6]
for (const i of arr) {
    console.log(`value of arr at ${i} is: ${i}` );
}

//Maps:A Map stores key-value pairs, similar to an object, but it has additional features such as allowing keys of any type.
const map=new Map()
map.set("In","India");
map.set("Fr","France");
map.set("us","USA");
console.log(map);

/**
 * | Method/Property   | Purpose                     |
| ----------------- | --------------------------- |
| `set(key, value)` | Add/update a key-value pair |
| `get(key)`        | Get a value by key          |
| `has(key)`        | Check if a key exists       |
| `delete(key)`     | Remove a key-value pair     |
| `clear()`         | Remove all entries          |
| `size`            | Number of entries           |
| `keys()`          | Get all keys                |
| `values()`        | Get all values              |
| `entries()`       | Get key-value pairs         |
| `forEach()`       | Iterate through the map     |

 */

const student = new Map();

student.set("name", "Shoheb");
student.set("age", 21);
student.set("course", "B.Tech");

console.log(student.get("name")); // Shoheb
console.log(student.has("age"));  // true
console.log(student.size);        // 3

student.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});