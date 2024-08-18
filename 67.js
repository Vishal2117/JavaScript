// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicate allowed)

const item = ['item1','item2','item3']
const numbers = new Set([1,2,3]);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(item);
numbers.add(['item1','item2']);
numbers.add(['item1','item2']);
for(let num of numbers){
    console.log(num);
}
if(numbers.has(11)){
    console.log("yes it is present");
}else{
    console.log("no it is absent");
}

const myArry = [1,2,3,4,4,5,5,6,6,5,4,7,8,9];
const ids = new Set(myArry);
let len = 0;
for(let id of ids){
    // console.log(id)
    len++;
}
console.log(len);