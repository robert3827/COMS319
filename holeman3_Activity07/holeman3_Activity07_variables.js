/**
 * Author: Robert Holeman
 * Net-id: holeman3
 * Date: 18 Sept 2023
 * Activity07 - Variables
 */

console.log("---- I am in V A R I A B L E S ----");

console.log("Q1 ----------------");
var var1 = "Iowa";
console.log(var1);
var var1=124
console.log(var1);

//Is it permitted ?
console.log("Yes or Not");
console.log("Yes, it is possible to re-define a variable in JS");

console.log("Q2 --------------");
let var2 = "Ames";
console.log(var2);
// let var2="124"
console.log(var2);

console.log("Yes or Not");
console.log("Using let is not valid to redefine a variable")

console.log("Q3 --------------");
let var3 = "Ames";
console.log(var3);
var2= 2023
console.log(var3);

console.log("Yes or Not");
console.log("Yes it is valid to reassign a different data type to a variable");


console.log("Q5 ----------------");
let var4;
// const var5;
console.log("What's the error : ");
console.log("Uncaught SyntaxError: Missing initializer in const declaration (at holeman3_Activity07_variables.js:40:7)");

console.log("Q6 --------------------");
const var6 = 3.1415;
// var6 = 2.81;
console.log("Whats the error: ");
console.log("Assignment to constant variable");


// Q6 : Explain the Error.
// let first name = "Abraham";
let first_name = "Abraham"
console.log(" Invalid variable vame: can't have space ");
// let 2numbers = [1,2];
let two_Numbers = [1,2];
console.log(" Invalid variable name: can't begin with a digit ");
// let city-state = "Ames Iowa";
let city_state = "Ames Iowa"
console.log(" Invalid variable name: can't contain hyphen");


// Q7 : What !! ??
let mainCity = "DesMoines";
// console.log("This is the Capital :", MainCity);
console.log("This is the capital of: ", mainCity);
console.log(" Uncaught ReferenceError: MainCity is not defined");
console.log("Capitalization error: Should be \"mainCity\"");

// Q8 : "let" and "const" scope vs "var" scope
if (5 === 5) {
    var var7 = 100;
    }
    console.log(var7);
    if (5 === 5) {
    // let var8 = 100;
    var var8 = 100;
    }
    console.log(var8);
    console.log("Let is defined int he local scope i.e. within the loop, whereas var is defined in the global scope i.e. the entire ...variables.js file");
