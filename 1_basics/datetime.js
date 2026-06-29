// let myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())    //convert date into ISO format
// console.log(myDate.toJSON())       //wrapper function of toISOString()
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof(myDate)) //type of date and time is object

// let myCreatedDate = new Date(2023, 0, 23)     //to declare specific date
// console.log(myCreatedDate.toLocaleString())

// let myNewDate = new Date(2023, 0, 23, 5, 43)
// console.log(myNewDate.toLocaleString())

let mySpecificDate = new Date("2026-03-25")     //its a ISO format and it is supported by javascript
// console.log(mySpecificDate.toLocaleString())

// let mySpecialDate=new Date("01-14-2026")    //it is supported by javascript
// console.log(mySpecialDate.toLocaleString())


// let mySpaceDate=new Date("16-02-2026")    //Invalid! (javascript supports MM-DD-YYYY)
// console.log(mySpaceDate.toLocaleString())

let myTimestamp = Date.now()
// console.log(myTimestamp)
// console.log(mySpecificDate.getTime())
// console.log(Date.now())      //time in milliseconds
// console.log(Math.floor(Date.now()/1000))    //time in seconds

let newDate = new Date()
console.log((newDate))
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)

newDate.toLocaleDateString('Default', {
    weekday: "long"
})