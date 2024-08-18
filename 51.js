//default parameters

// function addTwoNum(a,b) {
//     if(typeof b==="undefined"){
//         b=0;
//     }
//     return a+b;
// }
function addTwoNum(a,b=0) {
    return a+b;
}

let ans = addTwoNum(4,9);
console.log(ans);