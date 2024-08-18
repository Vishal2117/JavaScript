// reduce method 

const numbers = [1,2,3,4,5];

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},10);

console.log(sum);


//accumulator , currentValue return
//1             2            3
//3             3            6
//6             4            10
//10            5            15
//now if i put initial value in callback function accumulator will start from that value

//accumulator , currentValue return
//10            1           11
//11            2           13
//13            3           16
//16            4           20
//20            5           25


const myCart = [
    {productId : 1, productName : "Mobile", price: 15000},
    {productId : 2, productName : "Laptop", price: 45000},
    {productId : 3, productName : "Refrigerator", price: 10000},
];

const totalPrice = myCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.price;
},0);

console.log(totalPrice);


//totalPrice , currentProduct return
//0            15000          15000
//15000        45000          60000
//60000        10000          70000

