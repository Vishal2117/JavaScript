//primitive vs reference data type

//primitive type

//primitive data types are store in stack
//LIFO Last IN First Out
//in stack every variable have their own space
//and we can change the value of variables 
// suppose we take num1 and num2
// and num2 assigning in num1 num2 = num1
// and then increamenting the value of num1
//it will cannot change the value of num2 because both have different memories

//|    |
//|    |
//|    |
//|    |
//|    |
//|    |
//|num2| cannot affect this one because both are stored in different index
//|num1| increamenting this value 

let num = 7;
let num2 = num;
console.log("value of num is ",num);
console.log("value of num2 is ",num2);
num++;
console.log("after increamenting in num:")
console.log("value of num is ",num);
console.log("value of num2 is ",num2);


//reference type
// Array

//array will store in HEAP and their address will store in pointer and that pointer will store in stcak that have the address of array 
//and when we print that array it will call the address and then take value from the HEAP and then print it 
//same thing happen when we asign one array in another array
//suppose we take array1 = ["item1","item2"];
//array2 = array1;
//the items will store in HEAP and give the address to the pointer that store in stack 
//as we asign the value of array1 in array2 the address of array1 is store in array2 and in that address the items are stored are ["item1","item2"]
//in stack two pointers are store right but those pointers have same address so the value that will print is same 
//suppose this HEAP
                                    //-------------------------------------|
                                    //
                                    //
                                    //       array1 = ["item1","item2"];
                                    //suppose the address is 842135
                                    // when we cahnge the value it will change here 
                                    //       array1.push("item3");
                                    // array1 = ["item1","item2","item3"];->842135 this is address
                                    //this will call by the pointer and then print it
                                    //-------------------------------------|

                                    //|        |
                                    //|        |
                                    //|        |
                                    //|        |
                                    //|        |
                                    //|        |
                       //   array2  //|pointer2|->array2 = array1 so its address is also 842135
                       //   array1  //|pointer1|->842135
let arr1 = ["item1","item2"];
let arr2 = arr1;
console.log("Value of arr1 is ",arr1);
console.log("Value of arr2 is ",arr2);
arr1.push("item3");
console.log("After pushing element in arr1:")
console.log("Value of arr1 is ",arr1);
console.log("Value of arr2 is ",arr2);



