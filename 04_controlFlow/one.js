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

    } else if (num === 0) {
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
console.log(findNegetive(10));


// Check if a person is adult (age ≥ 18) or minor.

const age = 10;

if (age >= 18) {
    console.log(`The person is an adult`);

} else {
    console.log(`Minor`);

};


// Write a program that gives grades:

// Marks ≥ 80 → A+

// Marks ≥ 60 → A

// Marks ≥ 40 → B

// Else → Fail

const marks = 80;
if (marks >= 80) {
    console.log(`A+`);

} else if (marks >= 60) {
    console.log(`A`);
} else if (marks >= 40) {
    console.log(`B`);

} else {
    console.log(`Better luck next time`);
};


// A shop gives discounts:

// If price ≥ 500 → 20% discount

// If price ≥ 200 → 10% discount

// Else → no discount

const price = 300;

if (price >= 500) {
    const discount = 20 / 100;
    const discountAmount = price * discount;
    const discountPrice = price - discountAmount;
    console.log(discountPrice);


} else if (price >= 200) {
    const discount = 10 / 100;
    const discountAmount = price * discount;
    const discountPrice = price - discountAmount;
    console.log(discountPrice);

} else {
    console.log(`There is no discount`);

};

// Check if a number is between 10 and 50.
const number = 62;
if (number >= 10 && number <= 50) {
    console.log(`The 10 ad 50 between number ${number}`);

} else {
    console.log(`false`);

};


// Check if a person’s age is between 18 and 60, and also check if they have a valid ID


const personAge = 20;
const id = false;
if (personAge >= 18 && personAge <= 60 && id) {
    console.log(`Age and id are valid`);

} else {
    console.log(`worng person`);

};


// Check if a number is positive, even, and less than 100.

const num = 5;

if (num > 0 && num % 2 === 0 && num < 100) {
    console.log(`All condition are true`);

} else {
    console.log(`invalid`);

}
;

// Mix of AND + OR


// Check if a student passes:

// Must have marks ≥ 40 AND attendance ≥ 75%
// OR must have a teacher’s recommendation (recommendation = true).

const stdMarks = 50;
const attendance = 78;
const recommendation = false;

if ((stdMarks >= 40 && attendance >= 75) || recommendation) {
    console.log(`The studednt pass`);

} else {
    console.log(`failed`);

};


// A shop gives discounts:

// 20% off if price ≥ 500 OR it’s a special day (specialDay = true)
// Otherwise, no discount.

const productPrice = 1000;
const specialDay = false;
if (productPrice >= 500 || specialDay) {
    const discount = 20 / 100;
    const discountPrice = discount * productPrice;
    const finalPrice = productPrice - discountPrice;
    console.log(`Give me ${finalPrice}`);
    console.log(`saved ${discountPrice}`);
} else {
    console.log(`no discount`);

};