//Nested scope

function one() {                  // function one can't access elements of function two
    const username = "kaushal"

    function two(){                 //function two can access all elements of function one
        const website = "instagram"
        console.log(username)
    }
    // console.log(website)
     two()
}
// one()

if (true){
    const username = "kaushal"
    if (username === "kaushal"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

addone(7)
function addone(num){
    return num + 1
}
// addone(5)


//addTwo(7)       //error
const addTwo = function(num){       //hosting(function ko declare karne ke saath saath hold karna)
    return num + 2
}
 addTwo(5)
