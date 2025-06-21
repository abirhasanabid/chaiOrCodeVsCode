/* string length */
const str = "Life, the universe, and everything. Answer:";
// console.log(`${str} ${str.length}`);


const str2 = '';
// console.log(str2.length);

/*  Check if Password is Strong Enough
🧩 Problem:
Write code that checks if a password is at least 8 characters long. */
const password = '1234dsfidf';
if (password.length >= 8) {
    // console.log('the password is storng');
}
else {
    // console.log('the password is too short');
};


/* Count Total Characters in Full Name
🧩 Problem:
You have a full name with first and last name. Count how many total characters it has (excluding the space). */
const name = 'Abid Hasan';
const total = name.replace(' ', '');
// console.log(`Toatal charecters : ${total.length}`);

/* Find the Longer String
🧩 Problem:
Compare two strings and print which one is longer. */

const oneStr = 'javascript';
const twoStr = 'physics';

if (oneStr.length > twoStr.length) {
    // console.log('First string is longer');

} else if (oneStr.length < twoStr.length) {
    // console.log('Second string is longer');
} else {
    // console.log('Both are the same length');
};


/* How Many Letters in All Words
🧩 Problem:
Count how many total letters are in an array of words. */

const words = ['javascript', 'java', 'guava'];

let wordsLength = 0;
for (let i = 0; i < words.length; i++) {
     wordsLength += words[i].length;
}
console.log(wordsLength);



