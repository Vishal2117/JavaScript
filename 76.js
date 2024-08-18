//short synatx

// const user = {
//     firstName: 'vishal',
//     age: 21,
//     about: function(){
//         console.log(this.firstName,this.age);
//     }
// }
// alternate method of writing function in object
// but we call this method not a function its sounds more accurate
const user = {
    firstName: 'vishal',
    age: 21,
    about(){
        console.log(this.firstName,this.age);
    }
}
user.about();