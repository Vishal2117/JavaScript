//how to iterate object

const person = {
    name : "vishal",
    age : 21,
    "person hobbies" : ["listening music","playing circket"]
}

//for in loop
//Object.keys()

// for(let key in person){
//     // console.log(person[key]);
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key , " : ",person[key]);
// }

// console.log(typeof Object.keys(person));
// let val = Array.isArray(Object.keys(person));
// console.log(val);

//for of loop

// for(let key of Object.keys(person)){
//     // console.log(key, " : ",person[key]);
//     console.log(`${key} : ${person[key]}`);
// }

//while loop

//Object.keys
// const key = Object.keys(person);

// let i = 0;

// while(i < key.length){
//     console.log(key[i]," : ",person[key[i]]);
//     i++;
// }

//Object.values
// const value = Object.values(person);

// let i = 0;

// while(i < value.length){
//     // console.log(value[i]);
//     console.log(value[i]);
//     i++;
// }