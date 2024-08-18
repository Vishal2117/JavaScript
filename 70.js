// optional chaining
const user = {
    firstName: 'vishal',
    address: {houseNumber: 72},
}
console.log(user?.firstName);
console.log(user?.address?.houseNumber); //undefined
// console.log(user.address.houseNumber); //TypeError