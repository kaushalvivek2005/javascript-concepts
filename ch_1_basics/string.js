console.log("kaushal"+"kumar")
const name = "kaushal"
const city = "jamshedpur"
console.log(`hello i am ${name} and i am from ${city}`)

const gameName = new String('Kaushal')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.table([gameName.charAt(3),gameName.indexOf('h'),gameName.toLowerCase()])

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,5)
console.log(anotherString)