// store methods in different object 
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    },
}
function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

// const user1 = createUser('vishal','talreja','vishaltalreja@gmail.com',21,'72,kubernagar,ahmedabad');
// const user2 = createUser('ritesh','gupta','riteshgupta@gmail.com',20,'72,kubernagar,ahmedabad');
// console.log(user1.firstName,user1.lastName);
// console.log(user2.firstName,user2.lastName);
