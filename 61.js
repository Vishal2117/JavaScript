//find method

// const myArray = ["hello","cat","vrustu","dog"];

// function isLength(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId : 1, userName : "vishal"},
    {userId : 2, userName : "vrusti"},
    {userId : 3, userName : "gian"},
    {userId : 4, userName : "shinjo"},
    {userId : 5, userName : "shinchan"},
    {userId : 6, userName : "hathori"},
]

const UserId = +prompt("Enter your user Id:");

const myUser = users.find((id)=>id.userId===UserId);
console.log(myUser);