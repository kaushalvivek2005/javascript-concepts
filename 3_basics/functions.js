
function sayMyName(){       //function definition
    console.log("hii")
    console.log("kaushal")
}
sayMyName                   //function reference
// sayMyName()                 //function call

// add two numbers

// function addTwoNumbers(num1, num2){     // (num1, num2) are parameters
//     console.log(num1 + num2)
// }
function addTwoNumbers(num1, num2){    
    // let result = num1 + num2
    // return result
    return num1 + num2
}

// addTwoNumbers(3, 4)                  //(3, 4) are arguments
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")

const result = addTwoNumbers(3, 7)
// console.log("Result: ",result)              // o/p in value is undefined

// console.log("Result: ", result)

function loginUserMessage(username = "sam"){
    // if(username===undefined){
        if(!username){
            console.log("please enter a username")
            return
    }
    return `${username} just logged in`
 }
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())     //o/p is undefined
// console.log(loginUserMessage("")) 
    