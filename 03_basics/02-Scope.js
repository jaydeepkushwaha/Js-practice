// let a = 10    // GLOBLE SCOPE  this value is avelable for inside the scopes 
// const b = 20
// var c = 30 

if (true) {
    let a = 10  // this value have a block scope
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c); // var create a big mistake it may not have any scope 

function sumTwoNumber() {
    let a = 5                      // a have a outetr function scope
    function innerFunction() {
        let b = 10               // veriable b  have only innerfunction scope
        // console.log(a+b);

    }
    innerFunction()

    // console.log(a);

}

sumTwoNumber()

if (true) {
    const name = "jaydeep"
    if (name === "jaydeep") {
        const website = " youtube"
        // console.log(name + website);
    }
    // console.log(website);
}
// console.log(name);

// +++++++++++++++++++++++++++++++++interesting +++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num) {
   return num + 1
    
}


// addtwo()     // we can not call expression before decleration 
const addtwo = function (num) { // this is also called a expression in javascript
   return num + 2
}


