// function returning function
function myFunc1(){
    return function myFunc2(){
        return 10+55;
    };
}

// function myFunc2(){
//     return 10+55;
// }

// function myFunc1(){
//     console.log("hello from MyFunc1");
//     return myFunc2;
// }

let ans = myFunc1();
console.log(ans());