const user = {
    userName: 'Abid',
    price: 999,
    welcomeMessage: function () {
        // console.log(`${this.userName} welcome to website`);
        return `${this.userName} welcome to website`;            /* This keywod preffer current context : as I can see the objects and right now The objects context are his value so when diffrent usrname wanna us the objects it's current context will be the changed values : Like  the 12 line consol log it will print {korim welcome to website}*/

    }
};
console.log(user.welcomeMessage());
user.userName = 'Korim';
console.log(user.welcomeMessage());


// arrow function

const chai = (num) => num + 2           /* one line arrow function dosen't need return and curly braces*/ /*emplecite return means dosn't need to write return */

console.log(chai(2));

const orChai = (num) => {
    return num + 3
}
console.log(orChai(5));                 /* Two line code need this */ 


const arrow = () =>({userName : 'hitesh'}) /* The arrow and it value an objects */
console.log(arrow());


