// Singleton
// object.create

//Object litrals

const mySus = Symbol("Dell");

const jsUser = {
    name: "jaydeep",
    Roll_No: 221014 ,
    email : "jaydeepkushwaha558@gmail.com",
    [mySus] : "Mysystem",
    age : 21 ,
    isLoggedIn: false
}

// console.log(jsUser.name); // this syntex is working but there is some problem
// console.log(jsUser["name"]); // this syntex is always working there is no problem

jsUser.email = "jaydeepkushwaha555@gmail.com"
// Object.freeze(jsUser)
jsUser.email= "jaydeepkushwaha558@gmail.com"

// console.log(jsUser);

jsUser.greeting = function (){
    console.log(`hello js user ${this.name}`);
    
}
console.log(jsUser.greeting());




