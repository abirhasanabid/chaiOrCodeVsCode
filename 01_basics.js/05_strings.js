const name = 'Abid hasan Abir';
const age = 20;

// console.log(name + age); /* bad way to concat variable in js */

console.log(`My name is ${name.toUpperCase()} and my age is ${age}`);  /* good way to concat variable in js */


const newStr = new String('Justg a string');
console.log(typeof newStr);
console.log(newStr.length);
console.log(newStr.charAt(3));
console.log(newStr.indexOf('g'));  /* indexOf Method find the value of index number and it can received the starting point to find  the given value */
console.log(newStr.indexOf('t', 10));  /* The ans is like -1 why ??? */
const subStr = 'football';
console.log(subStr.length);

const newSubStr = subStr.substring(0, 3);  /* substring not allowed negative value */   /* substring first number is the index number and the last number is the lenght number {and we know the length number is bigger than index number} that's why substring end number provide the before value*/
console.log(newSubStr);


// const sliceStr = subStr.slice(-8,0);  /* we can use negative value but I can't understand the concepts */
// console.log(sliceStr);



const trimStr = '   abidhasan@gmail.com  ';
console.log(trimStr);
console.log(trimStr.trim());         /* remove white space from first and end but not in the middle  {most of the case the trim method use gmail from}*/


const url = 'https://abid.com/abid20%hasan';
console.log(url);
let newUrl = url.replace('20%','-');  /* replace method replace somethig with new value , replae method took 2 value first one what we replce and the second one is the new value whice is replaceable by old value */
console.log(newUrl);


const incluedStr = 'not possible';
console.log(incluedStr.includes('possible'));







