const score = 200;
console.log(score);

const number = new Number(300);
console.log(number);

console.log(number.toFixed(2).toString());  //when we use toFixed To a number it convart numbr into string.
const number1 = 4000000;
console.log(number1.toLocaleString());


// ==================Math=======================

// Evaryday use Matha Method 

// console.log(Math.abs());
// console.log(Math.round());
// console.log(Math.ceil());
// console.log(Math.floor());
// console.log(Math.max());
// console.log(Math.min());
// And the important one is random


// ------------------exercise----------------

// Generate a random number between 1 and 6 (like rolling a dice).
const min = 1;
const max = 6;
const minMaxResult = Math.floor(Math.random() * (max - min + 1) + min);
console.log(minMaxResult);


const fruitArray = ["apple", "banana", "mango", "orange", "grape"];
const randomFruit = Math.floor(Math.random() * fruitArray.length);
console.log(fruitArray[randomFruit]);





