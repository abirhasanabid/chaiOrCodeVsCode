// Gets the keys/property names

const person = { name: "Alice", age: 25, city: "NYC" };
const objKys = Object.values(person);
// console.log(objKys);

for (const keys in person) {
    // console.log('object keys :', keys);
    // console.log('object values :', person[keys]);

}

// Exercise 1: Print Object Properties

// Print each key and value
// Expected:
// name: John Doe
// age: 20
// grade: A
// subjects: Math,Science,English

const student = {
    name: "John Doe",
    age: 20,
    grade: "A",
    subjects: ["Math", "Science", "English"]
};

for (const key in student) {
    const value = student[key];

    if (Array.isArray(value)) {
        console.log(key, ':', value.join(', '));
    }
    else {
        console.log(key, ':', value);
    }
}
