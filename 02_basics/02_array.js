const fruits = ['apple','bananna','guava','pinaple','watermelon'];
console.log(fruits);
fruits.push('jackfruit');
console.log(fruits);
fruits.pop()
console.log(fruits);


/* Exercise */
// Print the first and last fruit using indexes and .length.

let fruits2 = ["apple", "banana", "mango", "orange"];
console.log(fruits2[0],fruits2[fruits2.length-1]);

// 👉 Check if "green" exists. If yes, print its index.

let colors = ["red", "green", "blue", "yellow"];
if (colors.includes('green')) {
    console.log(colors.indexOf('green'));
    
} else {
    console.log('Not existed');
    
};

// 7. Real-Life (Shopping Cart)
// The customer changes their mind:

// Remove "Cap"

// Add "Jeans" at the end

// Add "Watch" at the beginning

let cart = ["Shoes", "T-shirt", "Cap"];
cart.pop();
cart.push('Jeans');
cart.unshift('Watch');
console.log(cart);





 