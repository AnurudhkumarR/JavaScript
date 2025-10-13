//checking sum zero --- problem-1
// [-5,-4,3,1,5,4,-2] input

// quadratic time complexity(o(n^2))

function getSumpair(arr) {
  for (let number of arr) {
    for (let j = 1; j < arr.length; j++) {
      if (number + arr[j] === 0) {
        return [number, arr[j]];
      }
    }
  }
}
const result = getSumpair([-5, -4, 3, 1, 5, 4, -2]);
console.log(result);
// -------------------------------------------------------------
// Linear timie complexity(o(n))
function getSumpair(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(-num)) {
      return [num, -num];
    }
    seen.add(num);
  }

  return null; // if no pair found
}

const resulte = getSumpair([-5, -4, 3, 1, 5, 4, -2]);
console.log(result);
// -----------------------------------------------------------
// Using .reduce() + Set (O(n))
// If you want a functional programming style:

function getSumpair(arr) {
  const seen = new Set();
  function isSquareCheck(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let freq1 = {};
    let freq2 = {};

    for (let num of arr1) freq1[num] = (freq1[num] || 0) + 1;
    for (let num of arr2) freq2[num] = (freq2[num] || 0) + 1;

    for (let key in freq1) {
      let square = key * key;
      if (!freq2[square] || freq2[square] !== freq1[key]) {
        return false;
      }
    }

    return true;
  }

  console.log(isSquareCheck([1, 2, 3, 4], [1, 4, 9, 16])); // true
  console.log(isSquareCheck([1, 2, 3], [1, 9, 9])); // false

  return arr.reduce((acc, num) => {
    if (acc) return acc; // if found, skip further work
    if (seen.has(-num)) return [num, -num];
    seen.add(num);
    return null;
  }, null);
}

console.log(getSumpair([-5, -4, 3, 1, 5, 4, -2]));
//  Time: O(n)
//  Space: O(n)
//  Uses .reduce() cleanly and stops as soon as pair is found.

// ---------------------------------------------------------------

// Using .some() + Set (O(n))

// We combine a Set (for O(1) lookup) with a functional method.

function getSumpair(arr) {
  const seen = new Set();
  let pair = null;

  arr.some((num) => {
    if (seen.has(-num)) {
      pair = [num, -num];
      return true; // stop early when found
    }
    seen.add(num);
    return false;
  });

  return pair;
}

console.log(getSumpair([-5, -4, 3, 1, 5, 4, -2]));

//  Time: O(n)
//  Space: O(n)
//  Uses JS built-in functions elegantly.

// ---------------------------------------------------------------------------------------------

// Check it is  String Anagram

// 1-solution-
// condition-
// length check (for both strings)
// identify each occurance of letter
//  and identify each letter from other string
// if exist and count --
//  and if both string ===0 then true otherwise false

function isAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }

  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
    // counter[letter] = counter[letter]; this will give undefine but in js we handle this we put ||0
    console.log(counter[letter]);
  }
  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}
const check = isAnagram("hello", "lleho");
console.log(check);

// -------------------------------------------------------------------------------------------------------------------

// count Unique number

// [1,1,2,2,3,4,5,5,8]

// output = 6

// without usinging pre define function index of like
// later try unshorted arr

// condition
// check whether i=j;
// i=0,second loop j=1
// array[i]!==array[j]-agr match nahi karaigi tou ye chliga;
// 1-tou hum i++ karunga
// 2- array[i]=array[j]

function countUnique(array) {
  if (array.length) {
    let i = 0;
    for (j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is empty");
  }
}
const resultee = countUnique([1, 1, 2, 2, 3, 4, 5, 5, 8]);
console.log(resultee);
// ----------------------------------------------------------------------------------------------------
// Binary search
// Divide and conquerer technique
function searchAlgo(array, number) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    if (array[midIndex] < number) {
      min = midIndex + 1;
    } else if (array[midIndex] > number) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}
const resulteee = searchAlgo(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15],
  7
);
console.log(resulteee);
// -----------------------------------------------------------------------------------------------------

// Checking square in another array

// arr1=[1,2,3,4,], arr2=[1,9,4,16]

function isSquareCheck(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let isSquare = false;

    for (let j = 0; j < array2.length; j++) {
      if (array1[i] * array1[i] === array2[j]) {
        isSquare = true;
        break; // stop inner loop once found
      }
    }

    if (!isSquare) {
      return false;
    }
  }
  return true;
}

const resulteeee = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
console.log(resulteeee);

// This is optimisezed way of checking square in another array
// function checkSquare(array1, array2) {
//   let map1 = {};
//   let map2 = {};
//   for (item of array1) {
//     // n time

//     map1[item] = (map1[item] || 0) + 1;
//   }
//   console.log("Map1", map1);

//   for (item1 of array2) {
//     map2[item1] = (map2[item1] || 0) + 1;
//   }
//   console.log("Map2", map2);

//   for (let key in map1) {
//     console.log("Key", key);
//     if (!map2[key * key]) {
//       return false;
//     }
//     if (map1[key] !== map2[key * key]) {
//       return true;
//     }
//   }
//   return true;
// }

// const resulta = checkSquare([1, 2, 3, 4], [1, 9, 4, 25]);
// console.log(resulta);
// Anotherways------------------
function isSquareCheck(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let num of arr1) freq1[num] = (freq1[num] || 0) + 1;
  for (let num of arr2) freq2[num] = (freq2[num] || 0) + 1;

  for (let key in freq1) {
    let square = key * key;
    if (!freq2[square] || freq2[square] !== freq1[key]) {
      return false;
    }
  }

  return true;
}

console.log(isSquareCheck([1, 2, 3, 4], [1, 4, 9, 16])); // true
console.log(isSquareCheck([1, 2, 3], [1, 9, 9])); // false
