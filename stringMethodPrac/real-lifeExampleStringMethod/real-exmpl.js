// 1. Login Validation
let email = "   USER@gmail.com   ";
const newEmail = email.trim().toLowerCase();
if (newEmail.includes('@')) {
    console.log('Valid Email');

}
else {
    console.log('Invalid Email');

}


// 2. Username from Email

let email2 = "john.doe123@gmail.com";

console.log(email2.slice(0, email2.indexOf('@')));



// Blog Preview
let blog = "JavaScript is one of the most popular programming languages today.";
console.log(blog.slice(0, 30) + '...');


// 4. Weak Password Check
const password = 'Passsdafgkjdsnfgkd';
if (password.length >= 8 && password.match(/[0-9]/)){
console.log('strong password');

}
else{
    console.log('week password');
    
}

