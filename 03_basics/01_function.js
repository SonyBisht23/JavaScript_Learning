function sayMyName(){
    console.log("S");
    console.log("O");
    console.log("N");
    console.log("Y");
}
// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumbers;
// addTwoNumbers(3,4);
// console.log(3,"4");
// console.log(3,"a");
// console.log(3,null);
// const result=addTwoNumbers(3,6);
// console.log("result=",result);


// Nothing print after result
function addTwoNumbers(number1,number2){
    let result=number1+number2;
    return result
}
// const result=addTwoNumbers(2,5);
// console.log(result);

function loginUserMessage(username="david"){
    if(username==undefined){
        console.log("Please enter a username.");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Sony"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());
//console.log(loginUserMessage("Sony"));
// console.log(loginUserMessage());

// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200,300,400));

// function calculateCartPrice(...num){
//     return num
// }
// console.log(calculateCartPrice(200,400,600));

// function calculateCartPrice(v1,v2,...num){
//     return num;
// }
// console.log(calculateCartPrice(20,23,34,56,7,8));


// const user={
//     username:"Sam",
//     price:399
// }
// function check(objCk){
//     return `username is ${objCk.username} and price is ${objCk.price}`;
// }
// // console.log(check(user));
// console.log(check({username:"San",price:789}));


const myarr=[34,6,7,21];
function returnArr(arrar){
    return arrar[1]
}
// console.log(returnArr(myarr));
console.log(returnArr([23,89,5,87]));