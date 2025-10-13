// using loop
// const students = [
//   { name: "Alice", class: "A" },
//   { name: "Charlie", class: "A" },
//   { name: "Bob", class: "B" },
//   { name: "David", class: "C" },
// ];

// const grouped = {};

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   const key = student.class;

//   if (grouped[key]) {
//     grouped[key].push(student);
//   } else {
//     grouped[key] = [student];
//   }
// }

// console.log(grouped);

// nexproblem with another way

// first you have to install it using --npm install lodash
// lodash using

// const _ = require("lodash");

// const students = [
//   { name: "Alice", class: "A" },
//   { name: "Charlie", class: "A" },
//   { name: "Bob", class: "B" },
//   { name: "David", class: "C" },
// ];

// const grouped = _.groupBy(students, "class");

// console.log(grouped);

// using reduce--
const students = [
  { name: "Alice", class: "A" },
  { name: "Charlie", class: "A" },
  { name: "Bob", class: "B" },
  { name: "David", class: "C" },
];

const grouped = students.reduce((acc, student) => {
  // if the key (class) doesn't exist, create an empty array
  if (!acc[student.class]) {
    acc[student.class] = [];
  }

  // push the student into the right group
  acc[student.class].push(student);

  return acc; // return the accumulator for next iteration
}, {}); // {} is the initial value of the accumulator

console.log(grouped);
