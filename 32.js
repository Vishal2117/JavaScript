//while loop in array

const fruits = ["apple","banana","kiwi"];

let i = 0;
const fruits2 = [];
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);