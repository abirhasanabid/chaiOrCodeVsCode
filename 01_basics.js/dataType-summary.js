// two diffrent datatypes in js

// 1. primitive data types  
// such as : number, string, boolean, null, undefiend, symbol, bigint /* this kind of data provide copy of his data */



// 2. Reference (non-premitive) data types (ALL typeOf is object)
// such as : object, array, function, date, map, set.

const student = {
    name: 'Abid',
    age: 20,
    isActive: true,
    'subjects': ['Math', 'Science']
};
// console.log(student['subjects'][1]);

const myFuntion = function () {
    console.log('Hello, I am a function!');

};
myFuntion()



// javascript is a dynamically typed language, whice means that variables can hold values of any data type, and the type can change at runtime.In JavaScript, dynamically typed means you do not have to tell the computer what type of data (like number, string, etc.) a variable will store. The type is decided automatically when the code runs, and you can change it any time.

let value = 19;
value = 'hello';
value = true;
// console.table(typeof value);

/*  You can see that the same variable value can hold a number, a string, or a boolean.
JavaScript figures out the type for you while the program is running. This is called dynamic typing.
 */


const id = Symbol('123');
let id2 = Symbol('123');
// console.log(id === id2);



// type of bigInt = undefined;
// type of nul = Object;
// type of undefined = undefined;


