let i = 1;
while (i <= 10) {
    console.log(`${i}`);
    i++;
};


// Print even numbers from 2 to 10.
let even = 2;
while (even <= 10) {
    console.log(even);
    even += 2;
};

// Count down from 10 to 1.
let decrement = 10;
while (decrement >= 1) {
    console.log(decrement);
    decrement--;
};


// Find the sum of numbers from 1 to 10.

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);


let str = 'hello';
let i2 = 0;
while (i2 < str.length) {
    console.log(str[i2]);
    i2++;
};

// for loop practice started

// Print numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    // console.log(i);

};

// ✅ Practice 2: Print even numbers

// Print all even numbers between 1 and 50.

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(`even number ${i}`);
    }
};

// Practice 3: Sum of numbers

// Find the sum of numbers from 1 to 100.


let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    sum1 = sum1 + i;

};
console.log(sum1);

// Practice 4: Count vowels

let text = "javascript loops are fun";
let arrOfVls = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

for (let i = 0; i < text.length; i++) {
    let mainText = text.toLowerCase();
    let char = mainText[i];

    if (arrOfVls.includes(char)) {
        console.log(char);
        count++
    }
}
console.log(count);

// ✅ Practice 5: Reverse a string

const word = 'hello';
let reverse_str = '';

for (let i = word.length - 1; i >= 0; i--) {
    reverse_str += word[i];
};
console.log(reverse_str);


const reverseStr = word.split('').reverse().join('');
console.log(reverseStr);


// ✅ Practice 6: Highest number
let nums = [12, 4, 56, 17, 3, 99, 24];
let largeNum = nums[0];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largeNum) {
        largeNum = nums[i];
    };

};
console.log(largeNum);

// also we can do it using mathod. such as
// large number method 
const methodOfLargeNum = Math.max(...nums);
console.log(methodOfLargeNum);



let minNums2 = nums[0];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minNums2) {
        minNums2 = nums[i];
    };
};
console.log(minNums2);


// also we can do it using mathod. such as
// lower number method 
const methodOfMinNum = Math.min(...nums);
console.log(methodOfMinNum);



// ✅ Practice 7: Count occurrences  of (a)

let items = ["a", "b", "a", "c", "b", "a"];
let count2 = 0;
let iterateIteam = '';

for (let i = 0; i < items.length; i++) {
    iterateIteam += items[i];
    if (items[i] == 'a') {
        count2++;
    }

}
console.log(iterateIteam);
console.log(count2);


// Loop through numbers from 1 to 50,
// 👉 print each number,
// 👉 but stop the loop when you find the first number that is divisible by both 3 and 7.

for (let i = 1; i <= 50; i++) {
    console.log(i);
    if (i % 3 === 0 && i % 7 === 0) {
        break;
    }

};



// level - 1 practice with deepsick

// Exercise 1: Simple To-Do List Display

const todos = ["Buy milk", "Walk dog", "Study JavaScript"];
let todoNums = 1;

for (let i = 0; i < todos.length; i++) {
    console.log(`${todoNums++}. ${todos[i]}`);
}

// Exercise 2: Calculate Total Price

const prices = [10, 20, 30, 40];
let sum2 = 0;

for (let i = 0; i < prices.length; i++) {
    sum2 += prices[i]

};

console.log(sum2);

/* ****** important note is that I need to use {for of} in an array and {for in} for object */


// Find products that cost more than $5

const products = [
    { name: "Apple", price: 1 },
    { name: "Bread", price: 3 },
    { name: "Milk", price: 2 },
    { name: "Steak", price: 15 }
];

for (const product of products) {
    let productPrice = product.price;
    if (productPrice > 5) {
        console.log(product.name);
    };
};

// Exercise 4: Create HTML List Items
// Just create <li> tags as strings

const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(`<li>${color}</li>`);

};


// Level 2: Slightly Harder but Doable;

// Exercise 5: Format Names Properly

const names = ["alice", "BOB", "cHarLie"];
const emptyNames = [];
for (const name of names) {

    let makeRight = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    emptyNames.push(makeRight)

}

console.log(emptyNames);


// Exercise 6: Count Items in Cart

const carts = [
    { item: "apple", quantity: 3 },
    { item: "banana", quantity: 2 },
    { item: "apple", quantity: 1 }
];

let itemSum = 0;
for (const cart of carts) {
    console.log(cart);

    if (cart.item === 'apple') {
        itemSum += cart.quantity
    }

};
console.log(itemSum);

// Exercise 7: Find Discounted Prices
// Apply 20% discount to each product

const products1 = [
    { name: "Shirt", price: 25 },
    { name: "Pants", price: 40 },
    { name: "Shoes", price: 60 }
];

const discountPriceProducts = [];
for (const product of products1) {
    let discountPercentage = 20 / 100;
    let discountAmount = product.price * discountPercentage;
    let finalPrice = product.price - discountAmount;

    discountPriceProducts.push({
        name: product.name, price: finalPrice
    })
};

console.log(discountPriceProducts);


// Exercise 8: Check if User is Online
// Count how many users are online

const users = [
    { name: "Abid", isOnline: true },
    { name: "Korim", isOnline: false },
    { name: "Rohim", isOnline: true }
];


let onlineUserCount = 0;
for (const user of users) {
    if (user.isOnline) {
        onlineUserCount++;
    };

};

console.log(onlineUserCount);


// level 3
// real simple projects

// Project 1: Grade Calculator

// 1. Calculate average
// 2. Find highest grade
// 3. Find lowest grade
// 4. Display all three

const grades = [85, 90, 78, 92, 88];

let sumOfGrades = 0;
let heigGrade = grades[0];
let lowerGrade = grades[0];

for (const grade of grades) {
    sumOfGrades += grade;


    if (heigGrade < grade) {
        heigGrade = grade;
    } else if (lowerGrade > grade) {
        lowerGrade = grade;
    }

};
const avgOfGrades = (sumOfGrades / grades.length).toFixed(2);

console.log(`avarageOfGrade ${avgOfGrades}`);
console.log(`heiGrade ${heigGrade}`);
console.log(`lowGrade ${lowerGrade}`);


// Project 2: Simple Search

// User searches for "app"
// Find all products containing "app" (case insensitive)
// Expected: ["apple", "pineapple"]

const products2 = ["apple", "banana", "orange", "grape", "pineapple"];

const products2Empty = [];

for (const product2 of products2) {
    if (product2.toLowerCase().includes('app')) {
        products2Empty.push(product2)
    }

};

console.log(products2Empty);


// Project 3: Build a Menu

// Create navigation HTML:
// <a href="/">Home</a>
// <a href="/about">About</a>
// <a href="/contact">Contact</a>


const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" }
];

for (const menuItem of menuItems) {
    console.log(`<a href="${menuItem.link}">${menuItem.name}</a>`);

};
