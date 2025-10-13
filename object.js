// how many ways we can create object in javascript
// Object Literal: This is the simplest and most common way to create a single object.
// JavaScript

const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// -------------------------------------------

// Using new Object()

// Uses the Object constructor.

const persone = new Object();
person.name = "Anurudh";
person.age = 25;

// Works same as object literal
//  More verbose — rarely used in practice

// ---------------------------------------------------

// Using a Constructor Function

// Before ES6 classes, this was the main way to create “object blueprints.”

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Anurudh", 25);
const p2 = new Person("Raj", 30);

//  Allows creating multiple similar objects
//  Behaves like a class (before ES6)
// ----------------------------------------------------

// Using ES6 Class

// Introduced in ES6 — syntactic sugar over constructor functions.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const pa = new Person("Anurudh", 25);

// Cleaner, modern syntax
//  Supports inheritance using extends

// ------------------------------------------------

// Using Object.create()

// Creates a new object with a prototype linked to an existing object.

const proto = {
  greet() {
    console.log("Hello!");
  },
};

const person = Object.create(proto);
person.name = "Anurudh";

//  Useful for prototype-based inheritance
//  Gives control over prototype chain

// -----------------------------------------

// Using a Factory Function

// A regular function that returns an object (no new keyword).

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I’m ${name}`);
    },
  };
}

const pb = createPerson("Anurudh", 25);

//  Simpler and more flexible than constructor functions
//  No need to use new
// Common in functional programming

// ----------------------------------------------------

// Using Singleton / Object.freeze()

// You can create a single instance that cannot be modified.

const CONFIG = Object.freeze({
  appName: "StarAphonic",
  version: "1.0",
});

// Prevents changes (immutable object)

// ----------------------------------------------------

// Using JSON (from APIs or data files)

// You can parse a JSON string into an object.

const jsonString = '{"name": "Anurudh", "age": 25}';
const person = JSON.parse(jsonString);

//  Used when receiving data from APIs
//  Converts JSON → JavaScript object
// -----------------------------------------------------------

//  Summary Table
// Method	Example	Description
// 1-Object Literal	{ name: "Anurudh" }	Easiest, most common
// 2-new Object()	new Object()	Same as literal, less used
// 3-Constructor Function	new Person()	Pre-ES6 OOP
// 4-ES6 Class	new ClassName()	Modern OOP syntax
// 5-Object.create()	Object.create(proto)	Prototype-based inheritance
// 6-Factory Function	function makeObj() { return {...} }	Returns custom objects
// 7-JSON Parsing	JSON.parse(str)	From JSON text
// // 8-Singleton (Object.freeze)	Object.freeze({...})	Immutable single instance
// There are around 6–8 main ways to create objects in JavaScript —
// most commonly using object literals, classes, constructor functions, or Object.create().
