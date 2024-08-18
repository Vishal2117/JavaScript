// Maps
// Map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key
// like array, number, string 

// object literal
// key --> string, symbol 
// const person = {
//     firstName: "vishal",
//     age: 21,
//     1: "one",
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair

// const person = new Map();
// person.set('firstName','vishal');
// person.set('age',21);
// person.set(1,'one');
// console.log(person.get('firstName'));
// person.set([1,2,3],'oneTwoThree');
// console.log(person.get(1));
// console.log(typeof person);
// for(let key of person.keys()){
//     console.log(`${key} and is type is ${typeof key}`);
// }

// for(let [key,value] of person){
//     // console.log(Array.isArray(key));
//     // console.log(value);
//     console.log(key);
// }

// const person = new Map([['fisrtName','vishal'],['age',21]]);
// console.log(person);

// const person1 = {
//     id: 1,
//     firstName: 'vishal',
// }

// const extraInfo = new Map();
// extraInfo.set(person1,{lastName: 'talreja',age:21,gender:'male'});
// console.log(extraInfo);
// console.log('id:-',person1.id);
// console.log('First Name:-',person1.firstName);
// console.log('Last Name:-',extraInfo.get(person1).lastName);
// console.log('Gender:- ',extraInfo.get(person1).gender);
// console.log('Age:- ',extraInfo.get(person1).age);

