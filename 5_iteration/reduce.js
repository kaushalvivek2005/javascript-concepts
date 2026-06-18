const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, curVal){
//     console.log(`acc: ${acc} & curval: ${curVal}`)
//     return acc + curVal
// }, 0)

const myTotal = myNums.reduce((acc, curval) => acc + curval, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "python course",
        price: 499
    },{
        itemName: "web development course",
        price: 899
    },{
        itemName: "App development course",
        price: 1399
    },{
        itemName: "data science course",
        price: 2499
    }
]

const priceToPay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)

console.log(priceToPay)