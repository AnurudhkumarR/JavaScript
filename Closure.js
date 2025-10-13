// "A closure gives you access to an outer function’s variables from an inner function,
//  even after the outer function has returned.";

// Define in term of interviewer.
// "A closure is created when an inner function captures variables from its outer scope.
//  This allows the inner function to access those variables even after the outer function has returned.";

// Common Pitfall (They Might Ask):

// Closures can sometimes cause memory leaks if you keep too many unused references alive.
// ans---Remove unnecessary references when you no longer need the closure:

// closureFunc = null; // now bigArray can be garbage collected

// Avoid keeping large data inside closures if not necessary.

// Be careful with long-lived event listeners or timers that use closures.
// Interview prespective
// "Closures can hold references to outer variables, so if these closures are kept alive longer than needed, the memory used by those variables cannot be freed, leading to potential memory leaks.
//  It’s important to clear references or avoid storing large data inside closures unnecessarily."

// why closure are important
// Data Privacy / Encapsulation

// You can keep variables “private” because they are not accessible from outside, only via the returned inner function.

// Remembering State

// Functions can “remember” data between calls.

// Used in Real Life:

// Event listeners

// setTimeout / setInterval

// Factory functions

// Modules
function outer() {
  let count = 0; // variable in outer function

  function inner() {
    count++; // inner function can still use count
    console.log(count);
  }

  return inner;
}

const counter = outer(); // outer() has finished, but inner() still remembers "count"
counter(); // 1
counter(); // 2
counter(); // 3

// example with settimout

function greet(name) {
  setTimeout(function () {
    console.log("Hello " + name);
  }, 2000);
}

greet("Anurudh"); // After 2 seconds -> "Hello Anurudh"
