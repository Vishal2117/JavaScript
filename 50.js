//block scope vs function scope

//let and const are block scope 
//var is function scope

// {
//     let var1 = "vrusti";
//     // console.log(var1);//output vrusti
// }
// // console.log(var1);//output var1 is not defined

// {
//     const var1 = "vishal";
//     // console.log(var1);//ouput vishal
// }
// // console.log(var1);//output var1 is not defined

// const var2 = "khushi";
// console.log(var2);// this is also in block but in global block

// //you cannot access let and const outside the block

// {
//     var var1 = "value";
//     // console.log(var1);//output value
//     console.log(var2);
// }
// console.log(var1);//output value

// //but you can access var outside the block


// const var1 = "vrusti";

// function app() {
//     if(true){
//         const var1 = "vishal";
//         console.log(var1);
//     }
//     console.log(var1);
//     //if i commented out var1 which is declared outside the function the ouput of this console is undefine else the console.log will print vrusti.As previous concept that we learnt is lexical scope same concept will work here for let and const 
// }
// app();