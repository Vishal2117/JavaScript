//function declarartion

function singHappyBirthday(){
    console.log("Happy birthday to you...")
}

function sumOfTwoNumbers(num1,num2){
    return num1 + num2;
}
const returnedValue = sumOfTwoNumbers(44,44);
// console.log(returnedValue);

// function isEven(){
//     let getNum = +prompt("Enter number:");
//     // let checkTheNumber = getNum%2 == 0 ? true : false;
//     // console.log(checkTheNumber);
//     return getNum % 2 === 0;
// };

// console.log(isEven());

function firstChar(string) {
    return string[0];
}
// console.log(firstChar("vrusti"));

function findTarget(array, target) {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
// console.log(findTarget([2,3,5,6],7));