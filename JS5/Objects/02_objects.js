const tinderuser=new Object()
//const tinderuser={}
console.log(tinderuser);
console.log(tinderuser);

tinderuser.id="234A";
tinderuser.name="anas";
tinderuser.isLoggedIn=false;
const regularUser={
    email:"anas@gmail.com",
    fullname:{
        userfullname:{
            firstname:"HP",
            lastname:"Victus"
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
//const obj3={obj1,obj2};
//console.log(obj3);

//assign:Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
//const obj3=Object.assign(obj1,obj2);
//console.log(obj3);


const obj3={...obj1,...obj2};
console.log(obj3);

const user=[
    {
        id:1,
        email:"xyz@gmail.com",
    },
    {
        id:2,
        email:"abc@gmail.com",
    },
    {
        id:3,
        email:"lxi@gmail.com",
    },
    {
        id:4,
        email:"xyz@gmail.com",
    }
]
console.log(tinderuser);
console.log(user[1].email)
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

//entries:Returns an array of key/values of the enumerable own properties of an object
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLogged'));







