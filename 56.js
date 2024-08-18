//important array methods

//forEach

// const numbers = [4,2,5,7];

// function myFunc(number,index){
//     console.log(`index is ${index} number is ${number}`);
//     console.log(`${number}*2 = ${number*2}`);
// }

// numbers.forEach(myFunc);

// for(let i = 0; i < numbers.length; i++){
//     console.log(`${numbers[i]}*2 = ${numbers[i]*2} and index is ${i}`);
// }

// numbers.forEach(function(number,index){
//     console.log(`${number}*2 = ${number*2} and index is ${index}`);

// });

// for(let [i,number] of numbers.entries()){
//     console.log(`${number}*2 = ${number*2} and index is ${i}`);

// }

let users = [
    {firstName : "vishal", age: 21},
    {firstName : "joginder", age: 22},
    {firstName : "garima", age: 20}
]

// for(let i = 0; i < users.length; i++){
//     console.log(`Name: ${users[i].firstName} and their age is ${users[i].age}`);
// }

// for(let user of users){
//     console.log(`Name: ${user.firstName} and their age is ${user.age}`);
// }

users.forEach(user => {
    console.log(`Name: ${user.firstName} and age is ${user.age}`);

})