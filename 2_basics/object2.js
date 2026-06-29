// const tinderUser = new Object()    // singleton object
const tinderUser = {}   // non singleton object
// console.log(tinderUser)

tinderUser.id = "123bch"
tinderUser.name = "Kunal"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {                   //nested object
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kaushal",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

// merging of two or more objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)   //assign operator
const obj3 = {...obj1, ...obj2, ...obj4}         //spread operator
// console.log(obj3)

const users = [         //it is array
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "k@gmail.com"
    },
    {
        id:3,
        email: "m@gmail.com"
    }
]
// console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))    //datatype is array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))     //each key & value are in array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))    // check whether given is exists or not