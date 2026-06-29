const marvel_heros = ['Spiderman', 'thor', 'Ironman']
const dc_heros = ['Superman', 'Batman', 'Flash']

// marvel_heros.push(dc_heros) // 2nd array is not merged in 1st array but it simply placed inside it.
// console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_heros) //concat original array ko modify nahi karta hai
// console.log(all_heros)

// //spread operator(...a, ...b)
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("kaushal"))   // checks whether it is array or not
console.log(Array.from("kaushal"))    //convert into array

console.log(Array.from({name: "kaushal"}))  // Important

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
