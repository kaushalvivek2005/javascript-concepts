const coding = ["js", "ruby", "c", "cpp", "python"]

coding.forEach(function (val){
    // console.log(val)
})

coding.forEach((val)=>{
    //console.log(val)
})

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

coding.forEach((item, index, array)=>{
    // console.log(item, index, array)
})

const myCoding = [{
    languageName: "javascript",
    languageFileName: "js"
},
{
    languageName: "java",
    languageFileName: "java"
},
{
    languageName: "python",
    languageFileName: "py"
}
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName)
    console.log(item.languageName)
})
