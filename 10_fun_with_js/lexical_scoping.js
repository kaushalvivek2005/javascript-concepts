// lexical scoping -> Lexical Scope batata hai ki function 
// kaun-kaun se variables ko dekh (access) sakta hai.

// Lexical Scope = Function ki dekhne ki range.


// function Outer(){
//     let username = "kaushal"

//     function Inner(){
//         console.log("Inner", username);
//     }
//     Inner()
// }
// Outer()
// console.log("outer", username);



function Outer(){
    let username = "kaushal"
    // console.log(scale);
    
    function InnerOne(){
        let scale = "my123"
        console.log("InnerOne", username);
    }

    function InnerTwo(){
        console.log("InnerTwo", username);
        // console.log(scale);
    }
    InnerOne()
    InnerTwo()
}
Outer()

