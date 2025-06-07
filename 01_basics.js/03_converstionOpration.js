let score = "20";
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

const stringOfNumbers = "121343";
// console.log(typeof (stringOfNumbers));
// console.log(typeof Number((stringOfNumbers)));

const stringOfNumbers2 = "12dfjdf";
// console.log(Number(stringOfNumbers2));

const boolean = false;
// console.log(Number(boolean));

// '11' => 11
// "11fg" => NaN
// true => 1 : false => 0

const boolNumber = "DF";
// console.log(Boolean(boolNumber));

/* NOTES */
// 1=> TRUE
// 0=> FALSE
// ''=> FALSE
// 'ABOID'=> TRUE

const justNumber = 12;
// console.log(typeof justNumber);                   /* just number */

const convertToStr = String(justNumber);
// console.log(typeof convertToStr);    /* convert something to string */

/* //////////////////////// Opration ///////////////////// */

const value = 12;
const negValue = -value;
// console.log(value);
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);  /* this is to the power */
// console.log(2 / 2);
// console.log(2 % 3);

const str1 = "Hello";
const str2 = " Abid";
const strResult = str1 + str2;
// console.log(strResult);

// console.log(1 + 2);

// console.log(1 + "2");
// console.log(2 + 3 + "1");
// console.log("1" + 3 + 5);

// console.log(1*'2');
// console.log('4'*'2'*1);
// console.log('4'/'2');


// console.log(+true);
// console.log(-true);                 /* not a good way to write code */

// console.log(+false);

/* ////////////////// post increment ////////////// */
let x = 3;
const y = x++;  /* post-increment */ /* {++ pore hobe post incremetn a and akhane yar value 3 hobe execute a x ar man hobe 4 } */

// console.log(`x:${x}, y:${y}`);

/* ////////////////// pre-increment ///////////// */

let a = 3;
const b = ++a;  /* a is incremented to 4 first
then b gets the new value of a (which is 4) */

// console.log(`a: ${a}, b: ${b}`);




// example of pre-fix and post-fix

let gameCounter = 100;
console.log(++gameCounter);





