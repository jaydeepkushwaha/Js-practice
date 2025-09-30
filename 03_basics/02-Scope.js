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
console.log(c); // var create a big mistake it may not have any scope 
