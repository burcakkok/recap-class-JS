const arr = [
  "tennis",
  "football",
  "chess",
  "sailing",
  "paddel",
  "cricket",
  "basketball",
];

const peopleArr = [
  {
    name: "jose",
    age: 18,
    hobbies: ["tennis", "football", "chess"],
  },
  {
    name: "pepe",
    age: 28,
    hobbies: ["sailing", "paddel", "cricket", "basketball"],
  },
  {
    name: "toto",
    age: 67,
    hobbies: ["tennis", "football", "chess"],
  },
  {
    name: "keke",
    age: 8,
    hobbies: ["tennis", "football", "chess"],
  },
];

// peopleArr.forEach((person) => {
//   debugger;
//   console.log(person);
// });

// peopleArr.forEach((person) => {
//   console.log(person["name"]);
// });

// peopleArr.forEach((person) => {
//   if (person.age >= 18) {
//     console.log(person.name)
//   }
// });

// -----------

// const body = document.querySelector("body");

// peopleArr.forEach((person) => {
//   const paragraph = document.createElement('p');
//   paragraph.textContent = person.name;
//   body.appendChild(paragraph);
//   // create an UL and append each hobby as an LI
// });

// -----------

// const newPeople1 = peopleArr.forEach((person) => {
//   return person;
// });

// const newPeople2 = peopleArr.map((person) => {
//   return person;
// });

// const peopleArrWithDog = peopleArr.map((person) => {
//   return { ... person, hasDog: true };
// });

// console.log("newPeople1", newPeople1);
// console.log("newPeople2", newPeople2);
// console.log("peopleArrWithDog", peopleArrWithDog);

// -----------

// const somePeople = [];
// peopleArr.forEach((person) => {
//   somePeople.push(person);
// });

// const peopleArrWithDog = peopleArr.map((person) => {
//   return { ... person, canEnterTheClub: person.age >= 18 };
// });

// const myFavouritePerson = peopleArr.find((el) => {
//   return el.name === "pepe";
// });

// console.log("myFavouritePerson :>> ", myFavouritePerson);

// -----------

// const findPerson = []
// peopleArr.forEach((person) => {
//   if(person.name === "pepe") {
//     findPerson.push(person);
//   }
// });

// console.log("findPerson :>> ", findPerson);

// ------------

