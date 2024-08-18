const user1 = {
    firstname: 'vishal',
    age: 10,
    about: function(){
        console.log(this.firstname,this.age);
    }
}

//don't do this mistake

// user1.about();

// don't do this
// const myFunc = user1.about;
// myFunc();

// do this 
const myFunc = user1.about.bind(user1);
myFunc();