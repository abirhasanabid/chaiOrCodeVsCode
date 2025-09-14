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
// console.log(isGreaterThanTen(10));
// console.log(isGreaterThanTen(7));
// console.log(isGreaterThanTen(15));


// Write a function isPositive(num) that returns true if the number is greater than 0, otherwise false.

function isPositive(num) {
    return num > 0;
}
console.log(isPositive(-1));

// Write a function makeFullName(firstName, lastName) that returns a string like:
// "John Doe".

function makeFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
};
console.log(makeFullName('Abid', 'Hasan'));


// Voting Age Checker

function canVote(age) {
    if (age >= 18) {
        return `Yes, you can vote`
    }
    else {
        return `No you can't vote`
    }
}

console.log(canVote(10));
console.log(canVote(20));
console.log(canVote(90));


// Find the Biggest of Three Numbers

function findBigger(a, b, c) {
    // if (a > b && a > c) {
    //     return a

    // } else if (b > a && b > c) {
    //     return b
    // }
    // else {
    //     return c
    // }

    return Math.max(a, b, c);
}

console.log(findBigger(10, 20, 30));
console.log(findBigger(50, 20, 30));
console.log(findBigger(10, 20, 5));
console.log(findBigger(50, 60, 70));

// String Length Checker
function checkStringLength(str) {
    if (str.length > 5) {
        return `long string`
    } else {
        return `short string`
    }
}
console.log(checkStringLength('Hello'));
console.log(checkStringLength('Javascipt'));

// Find First Element of an Array

const arr = [12, 435, 56, 6, 7];
const fruits = ["apple", "mango", "banana"];
function getFirstElement(element) {
    if (element.length === 0) {
        return `The aray is empty`
    } else {
        return element[0]
    }
}
console.log(getFirstElement(arr));
console.log(getFirstElement([]));
console.log(getFirstElement(fruits));



const user = {
    name: "Abid",
    age: 12
}

function forObj(obj) {
    return obj;
}
console.log(forObj(user));
