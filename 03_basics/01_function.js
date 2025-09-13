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
    else {
        return `b is smaller than a`;
    }

}
const biggestNumberResult = biggestNumber(2, 5);
console.log(biggestNumberResult);

// Write a function called findSquare that takes 1 number and returns its square.

function findSquare(num) {
    return num * num;
};
const squeResult = findSquare(2);
console.log(squeResult);


// Find the bigger number
function findBigger(num1 = 0, num2 = 0) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};
const resultOfTheBiggerNumber = findBigger(10, 20);
const resultOfTheBiggerNumber1 = findBigger(50, 30);
console.log(resultOfTheBiggerNumber);
console.log(resultOfTheBiggerNumber1);



// Add 3 Numbers
function addThreeNumbers(a, b, c) {
    return a + b + c;
};
console.log(addThreeNumbers(2, 3, 4));
console.log(addThreeNumbers(10, 20, 30));

// Greeting Function
function greetUser(name) {
    return `Hello ${name}, welcome!`
};
console.log(greetUser('Abir'));
console.log(greetUser('Rahim'));

// Number Greater Than 10?
function isGreaterThanTen(n) {
    if (n > 10) {
        return true;
    }
    else {
        return false;
    }

    // return n > 10;     /* this is the shorter version of 100 to 105 number line */
};
console.log(isGreaterThanTen(10));
console.log(isGreaterThanTen(7));
console.log(isGreaterThanTen(15));

