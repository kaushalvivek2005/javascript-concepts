const userEmail = "kaushal@gmail.com"
// const userEmail = ""
// const userEmail = []
// if (userEmail){
//     console.log("Got user Email")
// } else {
//     console.log("Don't have user email")
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// true, " ", "0", "false", [], {}, function(){}

// if (userEmail.length !== 0){
//     console.log("got user email")
// } else {
//     console.log("don't have user email")
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10            // o/p is 5
// val1 = null ?? 10        // o/p is 10
// val1 = undefined ?? 15       // o/p is 15
// val1 = null ?? undefined     // o/p is undefined
// val1 = undefined ?? null   // o/p is null

console.log(val1)


// Ternary operator
//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")