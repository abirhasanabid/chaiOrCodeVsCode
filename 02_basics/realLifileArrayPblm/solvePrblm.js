// 🔥 Real-Life Array Problems

// 1. Shopping Cart

let cart = ["Shoes", "Cap", "T-shirt"];
// 👉 Remove "Cap"
// 👉 Add "Watch" at the beginning
// 👉 Add "Jeans" at the end
// 👉 Check if "Shoes" exists in the cart
// 👉 Print the total number of items

// cart.splice(1,1)
cart.splice(cart.indexOf("Cap"),1);
console.log(cart);
cart.unshift("Watch");
console.log(cart);
cart.push("Jeans");
console.log(cart);

if (cart.includes("Shoes")) {
    console.log(`shoes are there`);
    
} else {
    console.log(`There is no shoes in the array`);
    
}

console.log(`Total Items : ${cart.length}`);





