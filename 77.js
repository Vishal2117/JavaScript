//create functions to create multiple objects

// const user = {
//     firstName: 'vishal',
//     lastName: 'talreja',
//     email: 'vishaltalreja@gmail.com',
//     age: 10,
//     address: 'House number, colony, pincode,state',
//     about(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18(){
//         return this.age >= 18;
//     }
// }
//function (that function create object)
// 2) add key value pair
// 3) object ko return karega
function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function(){
        return this.age >= 18;
    };
    return user;
}

const user1 = createUser('vishal','talreja','vishaltalreja@gmail.com',10,'72,kubernagar,ahmedabad');
console.log(user1);
console.log(user1.about());
console.log(user1.is18());