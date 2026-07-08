//closure ->A closure is a function that remembers 
// and can access variables from its outer scope even 
// after the outer function has finished executing.

//closure-> Function apne parent function ke variables 
// ko yaad rakhta hai, chahe parent function khatam 
// hi kyu na ho.

function Student(){
    const name = "komal"

    function displayName(){
        console.log(name);
    }
    return displayName
}

const myname = Student()
myname()