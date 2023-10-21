// let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let newDate=new Date(2023,4,23);
// let newDate=new Date(2022,7,23,9,8);
// let newDate=new Date("06-23-2000");
// console.log(newDate);
// console.log(newDate.toString());
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());

// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getFullYear());

let newDate=new Date();
newDate.toLocaleString('default',{
    weekday:"long"
})