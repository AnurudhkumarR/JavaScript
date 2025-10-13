// This all code belongs to repated value of each number
// function countOccurrences(arr) {
//   const counts = new Map();
//   for (const num of arr) {
//     counts.set(num, (counts.get(num) || 0) + 1);
//   }
//   return counts;
// }

// const numbers = [1, 2, 3, 2, 1, 4, 5, 3, 2];
// const occurrences = countOccurrences(numbers);
// console.log(occurrences);
// Output: Map { 1 => 2, 2 => 3, 3 => 2, 4 => 1, 5 => 1 }

// next solution for same problem----------------------------------------

// const numbers = [2, 5, 3, 2, 7, 5, 2];
// const count = {};
// numbers.forEach((num) => {
//   count[num] = (count[num] || 0) + 1; // Count frequency
// });

// for (let key in count) {
//   if (count[key] > 1) {
//     console.log(`${key} is repeated ${count[key]} times`);
//   }
// }

// next solution----------------------------------------------------

const numbers = [2, 5, 3, 2, 7, 5, 7, 2];
const count = {}; // Object to store counts

// Step 1: Count frequency using for loop
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (count[num]) {
    count[num]++; // Increase if already exists
  } else {
    count[num] = 1; // Initialize first time
  }
}
// Step 2: Print only repeated numbers
for (let key in count) {
  if (count[key] > 1) {
    console.log(`${key} is repeated ${count[key]} times`);
  }
}
