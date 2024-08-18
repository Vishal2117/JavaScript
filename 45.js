//function expression

const singHappyBirthday = function (){
    console.log("Happy birthday to you...")
}

const sumOfTwoNumbers = function (num1,num2){
    return num1 + num2;
}
const returnedValue = sumOfTwoNumbers(44,44);
// console.log(returnedValue);

// const isEven = function (){
//     let getNum = +prompt("Enter number:");
//     // let checkTheNumber = getNum%2 == 0 ? true : false;
//     // console.log(checkTheNumber);
//     return getNum % 2 === 0;
// };

// console.log(isEven());

const firstChar = function (string) {
    return string[0];
}
// console.log(firstChar("vrusti"));

const findTarget = function (array, target) {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
// console.log(findTarget([2,3,5,6],2));