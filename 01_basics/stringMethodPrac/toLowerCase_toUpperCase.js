// const sentence = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";
const sentence = "The quick brown fox jumps over the lazy dog";
const UpperSentence = sentence.toUpperCase();
const lowerSentence = sentence.toLowerCase();
// console.log(UpperSentence);
// console.log(lowerSentence);

/* 
Case-Insensitive Comparison
🧩 Problem:
Check if a user's input matches the word "admin" — no matter what case they type. */


const mainAdmin = "admin";
const userAdmin = "ADMIN";

if (mainAdmin.toLowerCase() === userAdmin.toLowerCase()) {
    console.log('The user admin is matched, you can go foroward');

} else {
    console.log('Invalid User Name');

};


/*  Format Name (First letter capital only)
🧩 Problem:
Convert "john" → "John" (first letter capital, rest lowercase). */

const name = 'john';

const firstCapitalJohn = name[0].toUpperCase() + name.slice(1).toLowerCase();
// console.log(firstCapitalJohn);


/* Count Uppercase Letters
🧩 Problem:
Count how many uppercase letters are in a string. */

const text = "HeLLo WoRLD";

let uppercaseCount = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase() && text[i] !== text[i].toLowerCase()) {
        uppercaseCount++;
    }

};
console.log(uppercaseCount);


// Practice 3: Lowercase in function
// input is ' hello world '

function normalizeText(text) {
    const normalizeAns = text.toLowerCase().trim();
    return normalizeAns
}
console.log(normalizeText(' hello world '));


