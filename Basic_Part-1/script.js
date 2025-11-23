// var, let, const - Line by line comparison

var a = 12;
var username = "rahim";
let lastName = "Kalam";
const yourCity = "Dhaka";

var a; //declare
const payment = "30"; //declare and initialize

// Scope (global, block, functional);

var run = 339;

{
  const wicket = "rahim";
}

function card(params) {
  let packer = "Salt";
}

// Reassignment, redeclaration

var a = 12;
a = 13;
var a = 44;

let b = 33;
b = 44;

const c = 33;
// c = 34;

//  temporal Dead Zone
// console.log(aa);
let aa = 12;

// Hoisting impact per type
// Hoisting =>

console.log(a);

var a = 12;

var a = undefined;
a = 12;

//TODO: What Are Data Types?
// In JavaScript, every value has a type.
// These types define what kind of data is being stored — a number, text, boolean, object, etc.

//TODO: There are two categories:
// Primitive types – stored directly.
// String, number, boolean, null, undefined, symbol, bigint

// Reference types – stored as memory references.
// Array, Objects, Function
// [] {} ()

// TODO: Operators

// Arithmetic, Comparison, Logical, Assignment, unary, ternary

// +, -, /, *, %, **

// 12%2=0

{
  /* < > <= >= === == ! !== != */
}

// let a = 70
// a%=33

//TODO: && // AND – both must be true

// true && true - true,
// true && false - false,
// false && true - false,
// false && false - false

//TODO: || // OR – either one true

// true || true - true,
// true|| false - true,
//  false || true - true,
//  false || false - false

// TODO: ! // NOT – negates truthiness

// !true - false,
//  !false -true,

// TODO: Control Flow;

function getVal(val) {
  if (val < 25) return "D";
  if (val < 75) return "C";
}

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 33 && score <= 59) {
    return "E";
  } else if (score >= 0 && score <= 32) {
    return "Fill";
  } else {
    return "Invalid Marks X";
  }
}

console.log(getGrade(90));

// Q4 : Print  odd numbers from 1 to 15 using a while loop.

let i = 1;
while (i < 16) {
  if (7 % 2 === 1) {
    console.log(i);
  }
  i++;
}

// Q5:  Print the multiplication table of 5 (i.e., 5X1 = 5 ... 5 X 10 = 50)

for (let i = 1; i < 10; i++) {
  console.log(5 * i);
  console.log(`5 * ${i} = ${5 * i}`);
}

// Q6: Find the sum of number from 1 to 100 Using  a loop.

let sum = 0;
for (let i = 1; i < 101; i++) {
  sum = sum + i;
}

console.log(sum);

// Q7. Print all number between 1 to 50 that are divisible by 3.

for (let i = 1; i < 51; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Q8: Ask the user for a number and print whether each number from 1 to that number is even or odd

// (e.g., "1 is od", "2 is even".,..)

let val = prompt("Give a number");

for (let i = 1; i <= val; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is Odd`);
  }
}

// Q9. Count how many number between 1 to 100 are divisible by both 3 and 5.

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// TODO:TODO: Function

// Function Declarations
function marks() {
  console.log(1, 2, 3, 4, 5);
}

// TODO: Parameters vs Arguments

function greet(name) {
  console.log("Hello" + name);
}

// name is a parameter
// "Harsh" is the argument you pass

// TODO: Return Values
// function sum(a, b) {
// return a + b;
// }
// let total = sum(5, 10); // total is 15

// return sends back a result to wherever the function was called
// After return , function exits

// TODO:Function Expressions
// const greet = function () {
//   console.log("Hello!");
// };

// Functions stored in variables
// Cannot be hoisted (you can’t call them before they’re defined)

// TODO:Arrow Functions
// const greet = () => {
//   console.log("Hi!");
// };

// Cleaner syntax
// No own this , no arguments object

// IFFE
// (function(){})();

// TODO:TODO: Array

// Create
// let marks = [33, 40, 67, 80];

// Access
// marks[3];12

let capital = [32, 54, 67, 89, 56];
let ass = capital.sort(function (a, b) {
  return a - b;
});

console.log(ass);

// Objects

const person = {
  name: "Jamal sir",
  age: 38,
  height: "5-4",
  DOB: "02-01-2023",
};

// For in loop object

for (let key in person) {
  person[key];
  console.log(person[key], key);
}

// console.log(Object.entries(person));

// TODO: Shell Clone

let person2 = { ...person };

// TODO: Deep Clone

let obj2 = JSON.stringify(JSON.stringify(person));
