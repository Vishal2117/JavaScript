//every method

// const numbers = [2,4,6,8,10];

// const ans = numbers.every((number)=>number%2===0);
// console.log(ans);


const myCart = [
    {productId : 1, productName : "Mobile", price: 15000},
    {productId : 2, productName : "Laptop", price: 45000},
    {productId : 3, productName : "Refigrator", price: 10000},
];

const checkPrice = myCart.every((cartPrice)=> cartPrice.price < 50000);
console.log(checkPrice);