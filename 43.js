//nested detructuring
// definition of array detructuring
// to break down complex structure into simpler parts 

const users = [
    {userId : 1, firstName : "vishal", gender : "male"},
    {userId : 2, firstName : "vrusti", gender : "female"},
    {userId : 3, firstName : "jignesh", gender : "male"},
];

const [{firstName: userfirstName, userId}, ,{gender}] = users;
// console.log(firstName);
console.log(userfirstName);
console.log(userId);
// console.log(user2);
console.log(gender);