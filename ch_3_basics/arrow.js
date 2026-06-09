const user = {
    username: "kaushal",
    price: 230,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "amit"
// user.welcomeMessage()

// console.log(this)               // in node environment this refers to {}(empty object)

// if we run console.log(this) directly in browser then this refers to window

//functions

// function aman(){
//     let username ="kaushal"
     // console.log(this)
   // console.log(this.username)           //o/p is undefined
// }
// aman()

// const aman = function (){
//     let username ="kaushal"
//     //  console.log(this)
//    console.log(this.username)           //o/p is undefined
// }
// aman()


//Arrow function(=>)

const aman = () => {
    let username = "kaushal"
    console.log(this)
    //console.log(this.username)
}
// aman()

// syntax of arrow function 
// () => {}

// types of arrow function
// implicit return(no return keyword used) & explicit return(return keyword is used)

// const addTwo = (num1, num2) => {        //explicit return
//     return num1 + num2
//  } 
// console.log(addTwo(3, 5))

// const addTwo = (num1, num2) => num1 + num2      //implicit return
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "kaushal"})  //if we have to return object
console.log(addTwo(3,8))

const myArray = [1, 3, 2, 4, 5]
// myArray.forEach(() => ())
// myArray.forEach(() => {})