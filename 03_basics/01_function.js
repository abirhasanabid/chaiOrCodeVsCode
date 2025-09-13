function sumOFTheNumbes(num1, num2) {
    return num1 + num2

};
const result = sumOFTheNumbes(2, 4);
console.log(result);


// Function without parameters

function sayHello() {
    console.log("hello");

}
sayHello();

// Write a function named sayMyName that prints your name when you call it.
function sayMyName(name) {
    console.log(name);

}
sayMyName("abir");


// write a function named multiply that takes two numbers and prints their multiplication result.

function multiply(a, b) {
    return a * b;
}
const resultOfMulktiplay = multiply(4, 3);
console.log(resultOfMulktiplay);

// Even or Odd checker
function isEven(number) {
    if (number % 2 === 0) {
        return `This is an even number`
    }
    else {
        return `odd number`
    }
};

const checkNumber = isEven(2);
console.log(checkNumber);


// Biggest of two numbers
function biggestNumber(a, b) {
    if (a > b) {
        return `a is the bigger than b`;
    }
    else{
        return `b is smaller than a`;
    }

}
const biggestNumberResult = biggestNumber(2,5);
console.log(biggestNumberResult);
