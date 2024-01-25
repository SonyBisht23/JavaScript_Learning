// const coding=["js","ruby","java","python","cpp"]
// coding.forEach((x)=>{
//     console.log(x);
// })

// const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynums.filter((num)=>num>4)
// console.log(newnum);

// const nums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=nums.map((x)=>x+10)
// console.log(newnums);

// const num=[1,2,3,4,5,6,7,8,9,10]
// const newnums=num.map((x)=>x*2).filter((x)=>x>10)
// console.log(newnums);

// const n=[1,2,3]
// const total=n.reduce(function(acc ,curr){
//     return acc+curr
// },0)
// console.log(total);

const Courses=[
    {
        itemName:"Js in Depth",
        price:2999
    },
    {
        itemName:"Data Science complete course",
        price:6999
    },
    {
        itemName:"Web Development",
        price:4500
    },
    {
        itemName:"UI Design",
        price:999
    }
]
const price=Courses.reduce((acc,item)=>acc+item.price,0)
console.log(price);