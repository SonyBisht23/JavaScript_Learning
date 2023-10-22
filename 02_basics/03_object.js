// singleton:object ko literals ki trh declare karne pr banege
//condtructor se multiple instances bnte hai

//Object Literals

const sym=Symbol("key1");
const JsUser={
    name:"sony",
    age:23,
    [sym]:"hello sony",
    location:"Nathuwakhan",
    // "email user":"bisht@xyz.com",
    email:"bisht@xyz.com",
    isLoggedIn:true,
    idols:["meg Lanning","Ellyse Perry","Taylor Swift"]
}
// console.log(JsUser.email user);
// console.log(JsUser["email"]);
// console.log(JsUser[sym]);

// JsUse.email="chatgpt@xyz.com";
// Object.freeze(JsUse); //freeze make possible to no change
// JsUse.email="abc@xyz.com";
// console.log(JsUse);


JsUser.greeting=function(){
    console.log("hello JS user");
}
JsUser.greetingTwo=function(){
    console.log(`{hello js user ${this.email}}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());