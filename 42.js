//objects inside arrays
//very useful in real world applications
const users = [
    {userId : 1, firstName : "vishal", gender : "male"},
    {userId : 2, firstName : "vrusti", gender : "female"},
    {userId : 3, firstName : "jignesh", gender : "male"},
];
for(let user of users){
    console.log(`userId:- ${user.userId} 
    FirstName:- ${user.firstName} 
    Gender:- ${user.gender}`);
}