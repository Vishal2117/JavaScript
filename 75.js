//arrow function

// Arrow functions do not have their own this.
// Arrow functions inherit this from the surrounding lexical scope.
// Arrow functions cannot be used as constructors.
// Arrow functions are useful for maintaining the this context in situations like callbacks.

const user = {
    firstName: 'vishal',
    age: 21,
    about: () => {
        // console.log(this);
        console.log(this.firstName,this.age);
    }
}
user.about();