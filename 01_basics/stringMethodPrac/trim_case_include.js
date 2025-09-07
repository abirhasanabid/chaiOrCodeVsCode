// Saved user data
let savedEmail = "user@example.com";
let savedPassword = "Secret123";

// User input (with mistakes: spaces, wrong case)
let emailInput = "   USER@EXAMPLE.COM   ";
let passwordInput = "   secret123   ";

let cleanEmail = emailInput.toLowerCase().trim();
let cleanPassword = passwordInput.trim();

if(savedEmail === cleanEmail && savedPassword === cleanPassword){
console.log('Login Successful');

}else{
console.log("Invalid email or password");

}
