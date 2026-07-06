// Object Literal
// const user = {
//     username: "kaushal",
//     loginCount: 5,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         //console.log(`Username: ${this.username}`);
//         console.log(this);
        
//     }
// }

// // console.log(user.username);
// // console.log(user.getUserDetails());
// console.log(this);      //o/p is {}


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    // return this
}

const userOne = new User("kaushal", 34, true)
const userTwo = new User("chai", 21, false)

// console.log(userOne);
// console.log(userTwo.constructor);
console.log(userTwo.greeting());



