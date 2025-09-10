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

user.isAdmin = false;
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



