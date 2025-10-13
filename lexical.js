// "A lexical environment is the place where variables and functions are stored and how JavaScript connects them with their outer scope.
//  It is created whenever a function is declared or executed and forms the basis of the scope chain.";
function a() {
  console.log(b);
}
var b = 10;
a();

function outer() {
  let a = 10;

  function inner() {
    console.log(a); // inner function can access a
  }

  inner();
}

outer();

// When outer() is defined

// A lexical environment is created for outer containing variable a.

// When inner() is defined

// It gets its own lexical environment (empty at first)

// But also stores a reference to the lexical environment of outer.

// When inner() runs

// JavaScript first looks for a in inner’s lexical environment.

// Not found → it goes to the outer lexical environment (of outer()) and finds a = 10.

// inner() Lexical Environment
//    |
//    |---> outer() Lexical Environment
//                |
//                |---> Global Lexical Environment

let a = 100;

function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  inner();
}

outer(); // prints 10 (because it finds `a` in outer's lexical environment first)
