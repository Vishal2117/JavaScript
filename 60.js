//sort method
//ASCII value
//char : ascii value

// "0" : 48
// "1" : 49
// "2" : 50
// "3" : 51
// "4" : 52
// "5" : 53
// "6" : 54
// "7" : 55
// "8" : 56
// "9" : 57

// ":" : 58
// ";" : 59
// "<" : 60
// "=" : 61
// ">" : 62
// "?" : 63
// "@" : 64

// "A" : 65
// "B" : 66
// "C" : 67
// "D" : 68
// "E" : 69
// "F" : 70
// "G" : 71
// "H" : 72
// "I" : 73
// "J" : 74
// "K" : 75
// "L" : 76
// "M" : 77
// "N" : 78
// "O" : 79
// "P" : 80
// "Q" : 81
// "R" : 82
// "S" : 83
// "T" : 84
// "U" : 85
// "V" : 86
// "W" : 87
// "X" : 88
// "Y" : 89
// "Z" : 90

// "[" : 91
//"\\" : 92
// "]" : 93
// "^" : 94
// "_" : 95
// "`" : 96

// "a" : 97
// "b" : 98
// "c" : 99
// "d" : 100
// "e" : 101
// "f" : 102
// "g" : 103
// "h" : 104
// "i" : 105
// "j" : 106
// "k" : 107
// "l" : 108
// "m" : 109
// "n" : 110
// "o" : 111
// "p" : 112
// "q" : 113
// "r" : 114
// "s" : 115
// "t" : 116
// "u" : 117
// "v" : 118
// "w" : 119
// "x" : 120
// "y" : 121
// "z" : 122
// "{" : 123
// "|" : 124
// "}" : 125

//sort 

//4,3,55,6,79,94,45
//3 4 6 45 55 79 94 (expected output)

// const numbers = [4,3,55,6,79,94,45];
// console.log(numbers.sort());//[3, 4, 45, 55, 6, 79, 94]

// "First, JavaScript converts the number into a string. After that, JavaScript checks the value according to the ASCII value of that string and prints accordingly."

//"The sort method in JavaScript sorts values as strings, not numbers, and it uses the ASCII values of the characters for sorting."

// const sortingNumbersInAscendingOrder = numbers.sort(function(a,b){
//     return a - b;
// })
// console.log(sortingNumbersInAscendingOrder);

// const sortingNumbersInDescendingOrder = numbers.sort(function(a,b){
//     return b - a;
// })
// console.log(sortingNumbersInDescendingOrder);

// const strings = ["vishal","aashish","vrusti","gian","shinchan","Vrusti","Aron","Vishal"];
// console.log(strings.sort());


// price lowToHigh highToLow

const products = [
    {productId: 1, productName: "p1", price: 12000},
    {productId: 2, productName: "p2", price: 500},
    {productId: 3, productName: "p3", price: 22000},
    {productId: 4, productName: "p4", price: 10000},
    {productId: 5, productName: "p5", price: 1000},
];

const lowToHigh = products.slice().sort((a,b)=>a.price-b.price);

console.log(lowToHigh);

const highToLow = products.slice().sort((a,b)=>b.price-a.price);

console.log(highToLow);