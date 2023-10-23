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
// const obj3=Object.assign({},obj1,obj2);

// const obj3={...obj1,...obj2}
// console.log(obj3);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    courseame:"js in hindi",
    price:999,
    courseInstructor:"sony"
}
// console.log(course.courseInstructor);
// console.log(course["courseInstructor"]);

// const {courseInstructor}=course;
// console.log(courseInstructor);

// OBJECT DE STRUCTURE
// const {courseInstructor:ci}=course;
// console.log(ci);

// *******api now on json, before it comes with xml ********
// {
//     name:"hitesh",
//     coursename:'js',
//     price:'free'
// }

// [
//     {},{},{}
// ]
