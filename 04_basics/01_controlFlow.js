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