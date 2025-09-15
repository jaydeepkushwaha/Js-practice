// // const score = 100

// // console.log(score);

// const hundreds = new Number(100.000)
// console.log(hundreds.toString());

// // console.log(hundreds.toFixed(2)); // always fixed  two zeros after decimal in the number  specially used in e-commerse website

// // console.log(hundreds.toPrecision(4)); 

// const newNumbers = 100000000

// console.log(newNumbers.toLocaleString("en-IN")); // use for convert number in india standerds like  100000000 => 10,00,00,000

// // +++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)