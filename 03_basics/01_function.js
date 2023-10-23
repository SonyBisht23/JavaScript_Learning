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
console.log(loginUserMessage("Sony"));
console.log(loginUserMessage());
