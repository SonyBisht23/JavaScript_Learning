// const tinderUser=new Object();   //singelton object
const tinderUser={}; //non singleton object
// console.log(tinderUser);

tinderUser.id='123abc'
tinderUser.name="David"
tinderUser.isLoggedIn=true
// console.log(tinderUser);

const regularUser={
    email:'some@gmail.com',
    fullname:{
        userfullname:{
            firstname:"Sony",
            lastname:"Bisht"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser["fullname"]["userfullname"]["lastname"]);

const obj1={1:'a',2:"b"}
const obj2={3:'c',4:"d"}
// const obj3={obj1,obj2};
// const obj3=Object.assign(obj1,obj2);
console.log(obj3);