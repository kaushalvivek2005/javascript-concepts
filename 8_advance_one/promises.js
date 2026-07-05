// const promiseOne = new Promise(function(resolve, reject){
//     //do an async task
//     // DB calls, cryptography, network
//     setTimeout(function () {
//         console.log('Async task is complete');
//         resolve()
//     }, 1000)

// })

// promiseOne.then(function(){
//     console.log("Promise consumed")
// })

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "kaushal@exam.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username: "kaushal", password: "2456"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=> console.log("Promises is resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({username: "javascript", password: "2458"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
