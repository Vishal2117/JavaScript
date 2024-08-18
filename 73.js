//call, apply, bind

//call

// function aboutUser(hobby,favSong){
//     console.log(`Hello, My name is ${this.firstname} and my age is ${this.age}, My hobby is ${hobby} and my fav song is ${favSong}`);
// }

// const user1 = {
//     firstname: 'vishal',
//     age: 21,
//     gender: 'male',
//     // about: function (){
//     //     console.log(`Hello, My name is ${this.firstname} and my age is ${this.age}`);
//     // }
// }
// const user2 = {
//     firstname: 'ritesh',
//     age: 20,
//     gender: 'male'
// }

//this will work when we assign function in key value pair
// user1.about();
// user1.about.call(user2);

//this will work when we assign fuction globally
// aboutUser.call(user1,"Playing Cricket","Sajni(current fav)");
// aboutUser.call(user2,"Playing Cricket","Sajni(current fav)"); 

//apply
//in this we have to mention arugments in array format
// aboutUser.apply(user1,["Playing Cricket","Sajni(current fav)"]);

//bind
//this will return a function and whenever we need, we can call that function
// const func = user1.about.bind(user1);
// func();
// const func = aboutUser.bind(user1,"Playing Cricket","Sajni(current fav)");
// func();