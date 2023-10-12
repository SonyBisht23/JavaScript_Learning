// Based on how to store data in memory and access from Memory

// 1.Primitive DataType => 7 (all are call by value(copy change, original not)
// String,Number,Boolean, null,undefined,symbol,BigInt

// const score=33 //it's a number, no need to define datatype with it. 
               //"JS is Dynamically typed Language"

// const score:number=100 => in TypeScript

const score=100;
const scoreValue=100.3;
const isLoggedIn=false;
const outsideTemp=null;
let userEmail;  // let userEmail=undefined, both are same


const id=Symbol('123')          //value of both are same but return value will not same
const anotherId=Symbol('123')
console.log(id===anotherId)

const bigNumber=2765839300399388n;


// 2.Reference(Non-Primitive) DataType
// Array,Objects,Functions

const sportsPersons=["Meg Lanning","Nat Sciver","Alyesa Healy","Harmanpreet Kaur"];

let myObj={
    name:"Sony",
    age:22
}

const myFunctions=function(){
    console.log("Hello World");
}


console.log(typeof sportsPersons);
console.log(typeof myObj);
console.log(typeof myFunctions);

console.log(typeof bigNumber)
console.log(typeof outsideTemp);
console.log(typeof id);