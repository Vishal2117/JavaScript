//rest parameters

// function func(a,b,...c) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// func(1,2,3,4,5,6,7,8,9);

function addAll(...numbers) {
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
let ans = addAll(2,8,7,6);
console.log(ans);