//singleton
//object.create
//object literals1
const mysymbol1=Symbol("mykey1");
const jsUser={
    name:"victus",
    "fullname":"HP",
    age:18,
    [mysymbol1]:"mykey1",
    location:"VBN",
    email:"zya@gmail.com",
    isLoggedIn:false,
    lastLogInDays:["Monday","Saturday"]
}
console.log(jsUser.email);
console.log(typeof jsUser["email"]);
console.log(jsUser["fullname"]);
console.log(typeof jsUser[mysymbol1]);

jsUser.email="anas@gmail.com";

//freeze:Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
//Object.freeze(jsUser);
console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello JS USER");
    
}
console.log(jsUser.greeting());

jsUser.greeting2=function(){
    console.log(`hello js user,${this.name},${this.email}`);   
}
console.log(jsUser.greeting2());





