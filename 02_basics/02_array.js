const sportsPersons=["MS DHONI","ROHIT SHARMA","VIRAT KOHLI"]
const femaleSportsPerson=["MEG LANNING","BETH MOONEY","ELLYSE PERRY"]
// sportsPersons.push(femaleSportsPerson);  
// push will add another array in this array
// console.log(sportsPersons);
// console.log(sportsPersons[3]);
// console.log(sportsPersons[3][1]);

// allHeros=sportsPersons.concat(femaleSportsPerson)
// console.log(allHeros);


//... is a spread operator
// const allNewHeros=[...sportsPersons,...femaleSportsPerson]
// console.log(allNewHeros);

// const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realAnotherArr=anotherArray.flat(1)
// console.log(realAnotherArr);


// console.log(Array.isArray("Sony"));
// console.log(Array.from("Sony")); // to create an array

// console.log(Array.from({name:"sony"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));