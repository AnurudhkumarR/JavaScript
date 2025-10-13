const arr = [5, 3, 5, 6];

// Double - [10, 6, 5, 6];
// Triple - [15, 3, 9, 6, 18];
// Binary - ["101", "1", "11", "10", "110"];

function double(x) {
  return x * 2;
}
// console.log(double(5));
const output = arr.map(double);
console.log(`this is orignal array ${arr}`);

console.log(output);

function binary(x) {
  return x.toString(2);
}
// const outpute = arr.map(binary);

// const outpute = arr.map(binary);

// // another way/----------
const outpute = arr.map((x) => x.toString(2));
// const outpute = arr.map((x) => {
//   return x.toString(2);
// });
//
console.log(outpute);
console.log((5).toString(2)); // "101"
console.log((7).toString(2)); // "111"

// -------------------------------

// filterArray()
function isOdd(x) {
  // return x % 2 === 0;
  return x > 4;
}
const outputee = arr.filter(isOdd);
console.log();
// reduc() array function ----------------

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));

const outputeee = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(outputeee);
// ----console.log(outputeee());You don’t need () because reduce already gives you a value, not a function.
// When you write outputeee(), you’re trying to call a number like a function.
// But numbers are not callable in JavaScript.
// That’s why you’ll get an error:

// reduce function for sum

const outpeeee = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

// function reduce using in  groupIn or groupby problem statement--------------------------------------------------------------------------------------------

// this code only see occurance or count of class or here can be Number
const students = [
  { name: "Alice", class: "A" },
  { name: "Charlie", class: "A" },
  { name: "Bob", class: "B" },
  { name: "David", class: "C" },
];

const student = students.reduce((acc, curr) => {
  if (acc[curr.class]) {
    acc[curr.class] = ++acc[curr.class];
  } else {
    acc[curr.class] = 1;
  }
  return acc;
}, {});
console.log(student);

// if we want name also with each class
const studente = students.reduce((acc, curr) => {
  if (!acc[curr.class]) {
    // initialize empty array if class not present
    acc[curr.class] = [];
  }
  // push student name
  acc[curr.class].push(curr.name);
  return acc;
});
console.log(studente);
// If you want both count and names

const studentee = students.reduce((acc, curr) => {
  if (!acc[curr.class]) {
    acc[curr.class] = { count: 0, name: [] };
  }
  acc[curr.class].count++;
  acc[curr.class].name.push(curr.name);
  return acc;
}, {});
console.log(studentee);
// ----------------------------------------
// call,apply and bind
