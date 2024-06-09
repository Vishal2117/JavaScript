//how clone array

//how to concatenate array

let arr1 = ["item1","item2"];
// let arr2 = ["item1","item2"];
let arr3 = ["item5"];
// let arr2 = arr1.slice(0).concat(["item3","item4"],arr3);
// let arr2 = [].concat(arr1);
//new way to clone array 
// spread operator

// let arr2 = [...arr1,"item3","item4","item5"];
//  let arr2 = [...arr1,...arr3];

arr1.push("item3","item4");

console.log(arr1===arr2);
console.log("array1: ",arr1);
console.log("array2: ",arr2);