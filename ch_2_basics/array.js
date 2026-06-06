// const myArray = [0, 1, true, "Hello"]
const myArray = [2, 6, 8, 5]
const myHeros = ["Ironman", "Thor", "Hulk"]

const myArr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
// console.log(myArr[0])

// // array methods
// myArr.push(62)
// myArr.push(35)
// myArr.pop()

// // myArr.unshift(9) //insert element at starting
// // myArr.unshift(15)
// myArr.shift()   //remove the 1st element inserted 
// console.log(myArr)

// console.log(myArr.includes(75))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof(newArr))

// slice, splice

console.log("A",myArr)  //original array

const myn1= myArr.slice(1, 3)
console.log("B",myArr)     // array after slicing
console.log(myn1)

const myn2= myArr.splice(1, 3)
console.log("c",myArr)      //array after splicing
console.log(myn2)

// slicing= original array ko kuch nahi karta hai, ek new array return karta hai
// splicing= original array ko modify karta hai, elements nikal deta hai 