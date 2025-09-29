// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 15;

switch (month) {
    case 1:
        console.log(`january`);
        break;
    case 2:
        console.log(`February`);
        break;
    case 3:
        console.log(`March`);
        break;
    case 4:
        console.log(`Afril`);
        break;
    case 5:
        console.log(`May`);
        break;
    case 6:
        console.log(`june`);
        break;
    case 7:
        console.log(`july`);
        break;
    case 8:
        console.log(`August`);
        break;
    case 9:
        console.log(`september`);
        break;
    case 10:
        console.log(`october`);
        break;
    case 11:
        console.log(`novembor`);
        break;
    case 12:
        console.log(`december`);
        break;

    default:
        console.log(`There is no month in this number`);
        break;
};



// switch exercise two
const letter = 'C';
switch (letter) {
    case 'A':
        console.log(`Excellent`);
        break;

    case 'B':
        console.log(`Good`);
        break;
    case 'C':
        console.log(`Average`);
        break;
    case 'D':
        console.log(`Poor`);
        break;
    case 'F':
        console.log(`fail`);
        break;

    default:
        break;
}

// Exercise 3;

// A menu system:

// 1 → "Pizza"

// 2 → "Burger"

// 3 → "Pasta"

// 4 → "Sandwich"
// 👉 If input doesn’t match, print "Invalid choice".

const menuNumber = 5;
switch (menuNumber) {
    case 1:
        console.log(`Pizza`);
        break;
    case 2:
        console.log(`Burger`);
        break;
    case 3:
        console.log(`Pasta`);
        break;
    case 4:
        console.log(`Sandwitch`);
        break;

    default:
        console.log(`invalid choice`);
        break;
}