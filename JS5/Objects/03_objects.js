const course={
    courseName:"Js in Hindi",
    price:"999",
    courseInstructor:"Shivam"
}

//destructure:Destructuring in JavaScript is a feature that lets you extract values from arrays or properties from objects and store them in variables in a clean and concise way.
const{courseInstructor : instructor}=course
//console.log(courseInstructor);
console.log(instructor);


