//methods

//function inside object
//agar aap kisi function ko object ke ander likh rahe hai toh woh method hota hai

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person1 = {
    firstName: 'vishal',
    age: 21,
    about:personInfo,
}
const person2 = {
    firstName: 'vrusti',
    age: 21,
    about:personInfo,
}
const person3 = {
    firstName: 'ritesh',
    age: 22,
    about:personInfo,
}
person1.about();
person2.about();
person3.about();


