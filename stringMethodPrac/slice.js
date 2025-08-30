let text = "JavaScript";
const justJava = text.slice(0,4);
const justJavaNeg = text.slice(-6)

console.log(justJava);
console.log(justJavaNeg);

// 1. Fornt
// 2.Script
// 3.Bang
// 4.actJS
// 5. loper


// realLifie practice of slice.


// File extension check
// 👉 Extract the extension from a file name.
let file = "profile.png";
console.log(file.slice(-3));

// Credit card masking
// 👉 Show only the last 4 digits of a credit card.

let card = "1234 5678 9876 5432";
console.log(`**** **** **** ${card.slice(-4)}`);

// Extract domain from email
// 👉Get the part after @.

let email = "user@example.com";
const rateIndexOf = email.indexOf('@');
console.log(email.slice(4));

// Make it lowercase, remove spaces, then extract only the username (before @)

let email2 = "   KNIGHTRIDER@GMAIL.COM   ";
console.log(email2.toLowerCase().trim().slice(0,11));