//objects in javascript

//objects is reference type
//arrays are good but not sufficient
//for real world data
//objects store in key value pairs
//objects dont have index

//how to create object

const obj = {
    Name : "vishal",
    age : 21,
    Hobby : ["playing cricket","listening Music"]

};
// console.log(obj);

//how to access data from objects

console.log(obj.Name);
console.log(obj.age);
console.log(obj.Hobby[0]);
console.log(obj.Hobby[1]);

//how to add key value pair to objects
obj.gender = "male";
console.log(obj);
