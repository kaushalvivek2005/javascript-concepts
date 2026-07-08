// console.log(Math.PI)
// Math.PI  = Math.floor(Math.PI)
// console.log(Math.PI)

const descriptor =Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);
// o/p
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }



const User = {
    username : "kaushal",
    email : "kaushal@it.in",

    attendance : function(){
        console.log("kaushal is absent");
        
    }
}
// console.log(User);
console.log(Object.getOwnPropertyDescriptor(User, "username"));
Object.defineProperty(User, 'username', {
    // writable: false,
  enumerable: false,

})
console.log(Object.getOwnPropertyDescriptor(User, "username"));

for (let [key, value] of Object.entries(User)) {
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
        
    }
}