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

}

