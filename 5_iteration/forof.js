// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num)
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(greet)
}

//maps(unique key-value pairs)

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map)

for (const key of map) {
    //console.log(key)          //whole key is printed in the form of array
}

for (const [key, value] of map) {
    // console.log(key, ':-' , value)
}

//object(directly, it is not iterable in forof loop)
const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

for (const [key, value] of myObject){
    // console.log(key, ':-' , value)
}