// if(2==="2"){
//     console.log("Executed.");    
// }

// const temperature=41
// if(temperature===50){
//     console.log("Less than 50");
// }
// console.log("Temperature is greater than 50.");

// const score=200;
// if(score>100){
//     const power="Fly";
//     console.log(`User Power:${power}`);
// }

// const balance=1000;
// if(balance>500) console.log("Test");

const userLoggedIn=true
const debitCard=true
const loggedInFormGoogle=false
const loggedInFormEmail=true
if(userLoggedIn && debitCard){
    console.log("Allow to buy courses.");
}
if(loggedInFormEmail||loggedInFormGoogle){
    console.log("User Logged In");
}