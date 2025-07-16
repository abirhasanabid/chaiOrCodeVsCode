/* 1. Count the vowels
🧪 Input: "hello world" */

const str = 'hello world';
let vowels = 'aeiou';
let count = 0;
for (let i = 0; i < str.length; i++) {
    // count++
    if (vowels.includes(str[i].toLowerCase())) {   /* we use incudes method to see that specified one thing are in the given string or not */
        count++
    }
}

// console.log(count);


/* 2. Reverse a string
🧪 Input: "javascript"
🎯 Output: "tpircsavaj"
 */

const str2 = "javascript";
for (let i = str2.length - 1; i >= 0; i--) {
    const element = str2[i];

    // console.log(element);
}

const js = "javascript";
const reversed = js.split('').reverse().join('');
// console.log(reversed);

