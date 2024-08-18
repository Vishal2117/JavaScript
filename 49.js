//lexical scope

//if value of var1 is commented out in the function and value of var1 can not find by JS in same function then JS use lexical scope for printing values means JS trying to find the value outside the function where function was originally declared and if it still cannot find the value, it will continue to look outside of that function as well and keep looking untill it either finds the value or reaches the global scope.


let var1 = "value1";

function myApp() {
    // let var1 = "value2";

    const myFunc1 = () => {
        // let var1 = "value3";
        const myFun2 = () => {
            // let var1 = "value4";
            console.log("inside myFunc2", var1);//OutPut value1
        }
        myFun2();
    }
    myFunc1();
}
myApp();