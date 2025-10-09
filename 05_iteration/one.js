for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);

};

// for loop practice
// Print all numbers from 1 to 10 but stop when the number is 6.
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        // console.log(i);
        break;

    };
    // console.log(i);

};

// Print all numbers from 1 to 10 but skip 5.
for (let i = 1; i <= 10; i++) {
    const element = i;
    if (i === 5) {
        continue;
    }
    // console.log(element);
};


const fruits = ["apple", "mango", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'banana') {
        break;
    };
    // console.log(fruits[i]);
};


// Loop through numbers 1–20 and print only the odd ones.

for (let i = 1; i <= 20; i++) {
    const element = i;
    if (element % 2 !== 0) {
        // console.log(element);
    };
};


// Print numbers from 1 to 20,
// 👉 but skip all numbers between 8 and 12.
for (let i = 1; i <= 20; i++) {
    if (i >= 8 && i <= 12) {
        continue;
    }
    // console.log(i);
}


// Loop through numbers from 1 to 50,
// 👉 print each number,
// 👉 but stop the loop when you find the first number that is divisible by both 3 and 7.

for (let i = 1; i <= 50; i++) {
    const element = i;
    if (element % 3 === 0 && element % 7 === 0) {
        break;
    }
    // console.log(element);
};

// Print numbers in a pattern like this:

// 1 2 3
// 1 2 3
// 1 2 3

for (let i = 1; i <= 3; i++) {
    let row = "";
    for (let j = 1; j <= 3; j++) {
        row = row + j + " "
    };
    console.log(row);
};


