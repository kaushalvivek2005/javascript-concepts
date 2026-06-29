// singleton -> if we declare object as constructors
//object.create

//if we declare object as literals then it is not a singleton


//object literals

const mySym = Symbol("key1")    //only key made unique/hidden, object is remain mutable

const JsUser = {
    name: "Kaushal", //by default name is processed as "name"(string)
    "full name": "Kaushal Kumar",   //we cant access this value using(.)
    [mySym]: "mykey1",
    age: 18,
    location: "jamshedpur",
    email: "kaushal@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof mySym)
// console.log(typeof JsUser[mySym])

// JsUser.email = "kaushal@chatgpt.com"
// Object.freeze(JsUser)       //object is fully locked, thats why no changes can happens
// JsUser.email = "kaushal@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(JsUser.greeting)    //it returns function referance
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greetingTwo())