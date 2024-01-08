// IIFE: Immediately Invoked Function Expression

function chai(){
    console.log("Simple Function");
}
chai();

const arrFun=()=>{
    console.log("Arrow Function");
}
arrFun();


//Named IIFE
(function chai(name){
    console.log("Hello",name);
})("sony");


//Simple IIFE
((name,age)=>{
    console.log("Hello my name is",name," age is",age);
})("Sony",23)