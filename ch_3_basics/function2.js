function calculateCartPrice(val1, val2, ...num1){   // here val1 takes 200 & val2 takes 300
//function calculateCartPrice(...num1){           //rest operator(...num1)
    return num1
}
// console.log(calculateCartPrice(200, 300, 400, 500))

const user = {
    username: "kaushal",
    price: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 100, 400, 600]

function returnValue(getArray){
    return getArray[1]
}
// console.log(returnValue(myNewArray))
console.log(returnValue([200, 400, 100, 600, 800]))
