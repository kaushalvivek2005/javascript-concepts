// let myName = "kaushal   "
// let mychannel = "chai"

// console.log(myName.trim().length)
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "swing",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.kaushal = function(){
    console.log(`kaushal is present in all objects`);
}

Array.prototype.heyKaushal = function(){
    console.log(`kaushal says hello`);
    
}

// //heroPower.kaushal()
// myHeros.kaushal()
// myHeros.heyKaushal()
// // heroPower.heyKaushal() 

// it is a array prototype so, it has only access 
// of arrays not objects, functions, strings


//inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// console.log(TASupport.isAvailable);
// console.log(TeachingSupport.name);
// console.log(Teacher.makeVideo);


// modern syntax

// Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername= "kaushal  "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hiiKaushal".trueLength()
"helloguys".trueLength()