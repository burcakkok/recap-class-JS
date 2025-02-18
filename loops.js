// while loop
let counter = 1; // this is the var that we will use to break the while loop
while (counter !== 5) {
  console.log(counter);
  counter += 1; // now counter will be whatever counter was before, plus 1
  // counter++;  // equivalent to += but only useful when you want to increment by 1.
}

// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

[1, 2, 3, 4, 5, 6, 7].forEach((el) => {
  console.log(el);
});

const myForEache = (array, cb) => {
  for(let i = 0; i <= array.length; i++) {
    cb(array[i]);
  }
};
