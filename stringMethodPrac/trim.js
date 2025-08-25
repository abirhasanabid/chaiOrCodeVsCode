const str = " hello world ";
// console.log(str.trim());


/* Check if Input is Empty
🧩 Problem:
User enters spaces — check if it's empty after trimming. */

const userInput = '';
if (userInput.trim() === '') {
    // console.log('Input is empty');
} else {
    // console.log('Input is valid');
};

/* Count Real Characters
🧩 Problem:
Get the number of real characters after trimming.   
 */

const text = "   hello world   ";
const trimValue = text.trim();
// console.log(trimValue.length);

/* Compare Cleaned Strings
🧩 Problem:
Check if a username matches "admin" after trimming. */

const adminStr = "  ad min   ";

// console.log(adminStr.trim() .replace(' ',''));

if (adminStr.trim().replace(' ', '').toLowerCase() === "admin") {
    // console.log('Access Granted');
} else {
    // console.log('Access Denied');

}

let text4 = ' hello world';
console.log(text4);
const text4Result = text4.trim();
console.log(text4Result);

// Trim example in login senerio ;
let emailInput = "   user@example.com   ";
const finalEnput = emailInput.trim();
if (finalEnput === "user@example.com") {
    console.log("Access Granted 👉");
}else{
    console.log("Access Invalid");
    
}

