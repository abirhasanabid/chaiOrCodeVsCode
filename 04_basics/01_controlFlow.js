// Write a program that checks if a number is positive or negative.
// const num1 = 20;
// console.log(num1);

// if (num1 > 0) {
//     console.log(`The number ${num1} is positve`);

// } else {
//     console.log(`The number is negative`);

// }

const findNegetive = function (num) {
    if (num > 0) {
        return `The number ${num} is positve`;

    } else if(num === 0){
        return `The number is ${num}`;
    }
    else {
        return `The number ${num} is negative`;

    };
}
console.log(findNegetive(20));
console.log(findNegetive(-20));
console.log(findNegetive(0));
console.log(findNegetive(-5));
console.log( findNegetive(10));