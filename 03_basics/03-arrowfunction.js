const user = {
    username: "jaydeep",
    price: 99,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to our website`); // when we use current context then we use this keyword
    }
}

// user.welcomeMessage()

// user.username = "jaydeep kushwaha"

// user.welcomeMessage()

// console.log(this); // when we are try to print only this out put is empty space  (this is not working inside function)

// function chai() {
//     let username = "jaydeep"
//     console.log(this.username);

// }

// chai()

// const chai = ()=>{
//     let username = "jaydeep"
//     console.log(this.username); // its give undefined output
    
// }

// chai()

// const num = (num1 , num2)=>{
//     return (num1 + num2);  // arroe function
    
// }

// const num = (num1 , num2) => (num1+num2);  // single line arrow function


const num = (num1 , num2) => ({username : "jaydeep"});


console.log(num());
 


