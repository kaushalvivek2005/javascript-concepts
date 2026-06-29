const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor

const {courseInstructor: instructor} = course   //this is object de-structure
// console.log(courseInstructor)
console.log(instructor)

// APIs(values in Json)
//json(object without name)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// [
//     {},
//     {},
//     {}
// ]


// De-structuring in React 
const navbar = ({company}) => {         //de-structuring

}
navbar(company = "hitesh")
