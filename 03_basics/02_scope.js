const name = 'Abid';   /* This is global scope */
// console.log(name);


// And in block scopes are const and let


if (true) {
    let age = 20;
    const name = 'Samir'
}

console.log(name);     /* when I do console log out side  of the if else scope it will print an global varible but when I do console log in The inside of the if else scope it will plinted the scope declared vaiable */


// nested scope

function one() {
    const userName = "Abid Hasan";
    function two() {
        const age = 20;
        console.log(userName);
        /* we shoud memorise scope like : when we ask something to our older thy give us but when they asked for something this kinda odd */

    }

    two();
}
one();


// console log is just for print the ans and if there is no console log no printd ans


console.log(addOne(2));

function addOne(num) {               /* This function can print the ans  before the code run seems to that*/
    return num + 1;
};


const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(2));               /* but when I wanna execute this code this code show an error */
 



