//function inside function
function app(){

    const sumOfTwoNum = (num1,num2) => num1+num2;

    const mul = function (num3, num4) {
        return num3 * num4;
    }

    function hello() {
        console.log("inside hello function.");
    }
    console.log("Inside app.");
    console.log(sumOfTwoNum(2,3));
    console.log(mul(2,3));
    hello();

}
app();