//undefined

let firstName;
console.log(typeof firstName);
//same goes for var also but not with const

const secondName = 1;
console.log(typeof secondName)
//so in const we have to initialze the value

//null 

let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable);//the output of this is object because this is a bug/error in JavaScript

//BigInt

let num1 = 123n;
let num = BigInt(1123455321134);
// console.log(typeof num);
//BigInt operations are work with BigInt only
 console.log(num1 + num)
