const sentence = " A quick brow fox jumps over the lazy dog.";
// console.log(sentence);
let word = "fox";
word = "human";
console.log(`The word ${word} ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);   /* include method is case sensitive. Also we can give includes starting point for seach but we use it in rare case */

/* we use include in Email/Username validation */



/* Check if a Word Exists
🧩 Problem: Check if the word "code" exists in the sentence. */

const loveCode = "I love to code everyday";
console.log(loveCode.includes("code"));


/* Case Sensitivity
🧩 Problem: Will this return true or false? */

const word2 = "Fontend Developer"
console.log(word2.includes("fontend")); /* It show false cause we know uncludes is case sensative */


const name  = "Abid Hasan Abir";
// console.log(name.includes('a'));
if (name.includes("a")) {
    console.log(`The letter a is in the name`);
    
} else {
    console.log(`The letter a are absent`);
}

