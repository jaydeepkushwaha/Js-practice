// Singleton objects 

const tinderUser = {} // blanck object created
// console.log(tinderUser);


// const tinder = new Object ()

const tinder = "jaydeep" // singleton object 

// console.log(tinder);

const myInfo = {
    fullName : {
        firstName : "jaydeep",
        middleName : "kumar",
        lastName : "kushwaha"
    },
    id :221014,
    age : 21,
    gmail : "jaydeepkushwaha558@gmail.com"
}

// console.log(myInfo.fullName.lastName);


const course = {
    coursename : "java full Stack",
    courseDuration : "eight monthes",
    courseInstructors : "hitesh"
}

// course.courseInstructors

const { courseInstructors : instructor} = course // destructure our value (courseinstructor to instructor)

console.log(instructor);









