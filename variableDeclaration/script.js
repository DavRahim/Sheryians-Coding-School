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
c = 34;

//  temporal Dead Zone
console.log(aa);
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
