//Maps:A Map stores key-value pairs, similar to an object, but it has additional features such as allowing keys of any type.

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

// const student = new Map();

// student.set("name", "Shoheb");
// student.set("age", 21);
// student.set("course", "B.Tech");

// console.log(student.get("name")); // Shoheb
// console.log(student.has("age"));  // true
// console.log(student.size);        // 3

// student.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
// });

const map=new Map()
map.set("In","India");
map.set("Fr","France");
map.set("us","USA");
//console.log(map);

//for of loop
for (const [key,value] of map) {
    //console.log(key,':-',value);
}

const myObject={
    'game1':'NFS',
    'game2':'GTA',
    "game3":'LastOfUs'
}
//for in loop:
for(const key in myObject){
    //console.log(`${key} ${myObject[key]}`);
}

const arr=["apple","banana","guvava","almond","tiger","lion"];
for(const key in arr){
    console.log(`${key} ${arr[key]}`); 
}

//for each loop
