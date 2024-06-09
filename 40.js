//spread operator

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const newArray = [...array1,...array2];
// const newArray = [..."12345789452"];
// console.log(newArray);

//spread operator in objects
const obj = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3" 
};
const obj1 = {
    key1 : "value21",
    key3 : "value3",
    key4 : "value4",
    key5 : "value5"
};

// const newObject = {...obj,...obj1};
const newObject = {...obj1,...obj};
console.log(newObject);

// let umObj = {..."1234567"}
// console.log(typeof Number(numObj));
// console.log(Number(numObj));n