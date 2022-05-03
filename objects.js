const person = {
  name: "jose",
  age: 18,
  hobbies: ["tennis", "football", "chess"],
  family: [
    { name: "marta", rol: "mom", age: 50 },
    { name: "mohammed", rol: "dad", age: 45 },
    { name: "ana", rol: "sister", age: 50 },
  ],
};

// const isPersonNameJose = person.name === 'jose';

// console(isPersonNameJose); // true

// -----------

for (prop in person) {
  console.log(prop);
};

for (prop in person) {
  console.log(person[prop]);
};
for (prop in person) {
  console.log(person["age"]);
};

for (prop in person) {
  console.log(person.prop);
}; // will print undefined













