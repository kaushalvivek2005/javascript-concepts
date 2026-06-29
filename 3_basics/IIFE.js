//Immediately Invoked Function Expressions (IIFE)
// We use IIFE in code because of the problem caused by the pollution of the global scope. 
// It basically removes that pollution by wrapping code in its own scope. 
// It also executes immediately without being called explicitly.

(function one() {               //this is named IIFE(it has name)
    console.log(`DB connected`)
})();                       

// if we want to use two IIFEs in single code then we have to use termination(;)

(() => {                            //this is simple IIFE(it don't have name)
    console.log(`DB connected two`)
})();

((name)=>{                              //IIFE with parameter
    console.log(`${name} DB is connected`)
})("kaushal")
