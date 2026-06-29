//scope {} if it is in function, if-else, loop

// let a = 100      //Global scope
// const b = 55
// var c = 13

// var c=300
let a = 53
if (true){          // Block scope
    let a = 10     
    const b = 50
    console.log("Inner: ",a)
    // var c = 30      // the value of var inside {} can access outside it
    // c=35         // that's why we generally not  use inside code  
}

console.log(a)
// console.log(b)
// console.log(c)