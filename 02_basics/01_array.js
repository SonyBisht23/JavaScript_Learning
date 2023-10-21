//array

// const myArr=[1,2,3,4,5,true,"sony"];
// console.log(myArr);
// myArr.push(23)
// console.log(myArr);
// myArr.pop()
// console.log();
// myArr.unshift(29);
// console.log(myArr);
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(true));

//join changes our array into string
// const myArr=[1,2,3,4,5,true,"sony"];
// console.log(myArr);
// const newArr=myArr.join()
// console.log(newArr);

// slice, splice
const myArr=[1,2,3,4,5,true,"sony"];
console.log("A", myArr);
const ar1=myArr.slice(1,3);
console.log(ar1);
console.log("B", myArr);
const ar2=myArr.splice(1,3);
console.log("c",myArr);
console.log(ar2);

//SPLICE=include both the parameters and change original array , splice part will dispatch from original array

