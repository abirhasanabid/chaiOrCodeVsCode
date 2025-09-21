const user = {
  name: "Arif",
  age: 22,
  email: "arif@example.com",
  isAdmin: false,
  country: "Bangladesh"
};

console.log(user.age); //This is dot notation
console.log(user['name']);// backet notaion

// addind the objects new porpety

user.city = 'Pangsha';
console.log(user);

// Updatting property 

user.isAdmin = true;
console.log(user);

// deleting property

delete user.name
console.log(user);

// get all keys
const ObjKeys = Object.keys(user)
console.log(ObjKeys);

// get all values 

const objValues = Object.values(user);
console.log(objValues);

// meage 2 objects
const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'a', 4: 'b' };

const meargeObj = { ...obj1, ...obj2 };
console.log(meargeObj);

// 
// Q1: Use destructuring to extract name and city
// Q2: Rename "age" into "userAge" while destructuring

const identity = {
  name: "Rahim",
  age: 22,
  city: "Dhaka"
};
let { name, city} = identity;
console.log(city);
