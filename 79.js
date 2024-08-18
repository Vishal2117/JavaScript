// solution using Object.create 
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return 'ohh sajni re kaise kate din raat??, kaise ho tujhse baat??, teri yaad sataye re.';
    },
}
function createUser(firstName,lastName,email,age,address){
    const user = Object.create(userMethods);//{}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

const user1 = createUser('vishal','talreja','vishaltalreja@gmail.com',21,'72,kubernagar,ahmedabad');
const user2 = createUser('vrusti','kothari','vrustikothari@gmail.com',21,'bodakdev,satelite');
console.log(user1.firstName,user1.lastName);
console.log(user2.about()); 


