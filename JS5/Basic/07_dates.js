//Date:
let myDate=new Date();
// console.log("normal",myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);
let myCreatedDate=new Date(2023,0,23);
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date(2023,0,23,5,3);
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp=Date.now();
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getDate());
console.log(Date.now()/1000);

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);




