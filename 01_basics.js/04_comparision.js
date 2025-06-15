console.log(2 > 2);
console.log(3 > 2); /* same datatypes */
console.log(2 >= 2); /* it means greather than and equal to {if one of the condition is right it shows true otherwise false} */

console.log(2 < 2);
console.log(2 <= 2);

// --------------------diffrent datatypes--------------------------\
// Important 
// 1.we should not compare diffrent datatypes always it gives false
// 2. if we compare diffrent datatypes except string number and actual number it turn string number to number type number


console.log("12" == 2);         /* if the number is string type number and check equality the string type number convert to number {it just for string type number} */
console.log("12" == "12");

console.log(null == 0);
console.log(null < 0);
console.log(null > 0);
console.log(null <= 0);
console.log(null >= 0);              /* equality check and comparision check work deffrently **COMPARISION CONVERT NULL TO NUMBER AND IT VALUE IS (0)   and it dosen't work for undefiend most of the case we should avoid this type of comparision*/
console.log(undefined <= 0);
console.log(undefined == 0);


console.log(undefined >= 0);

console.log(2 == '2');
console.log(2 === '2'); /* the triple equal is strick checks it not checks only the value number it also check data types  */
