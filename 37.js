//difference between dot and bracket notation

const key = "email";
const obj = {
    Name : "vishal",
    age : 21,
    "person hobbies" : ["playing cricket","listening Music"],

}
// console.log(obj["person hobbies"]);
obj[key] = "abc@gmail.com";
// obj["key"] = "abc@gmail.com";
// obj.key = "abc@gmail.com";
console.log(obj);


