// parameter destructuring

//object
//react

const person = {
    firstName : "vishal",
    lastName : "talreja"
}

// function myPersonDetails(obj){
//     console.log("First Name : ",obj.firstName);
//     console.log("Last Name : ",obj.lastName);
// }
function myPersonDetails({firstName,lastName}){
    console.log("First Name : ",firstName);
    console.log("Last Name : ",lastName);
}

myPersonDetails(person);