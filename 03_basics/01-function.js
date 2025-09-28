
function myName (){
    // console.log("jaydeep");
    
}

myName()

// function twoNumbers (number1, number2){ // parameter  
//     console.log(number1+number2);
    
// }

// twoNumbers(10,20)// argument
// twoNumbers(10,"20")
// twoNumbers(10,"a")
// twoNumbers(10,null)

// const result = twoNumbers(2,3)
// console.log(result); // this throwing value of result is undefined

function twoNumbers (number1, number2){ 
//    let result = number1+number2
//    return result
// console.log("jaydeep"); // this value is exicuted
    return number1 + number2

    console.log("jaydeep"); // value is never exicute after declere return in the function
    
    
}

const result = twoNumbers(2,3)

// console.log(result);


function loginUser (username ="Jay"){
    return `${username} just logged in`
}

// console.log(loginUser ("jaydeep"));
// console.log(loginUser ("")); // not give any error
// console.log(loginUser ()); // if you not give any argument  it  will give undefined in output

function calculateCartPrice( ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


