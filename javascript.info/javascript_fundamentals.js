"use strict"; // special directive to use an up to date JS version in 'strict mode', must be the first uncommented line of a script.

// variables cannot be declared more than once
// variable names may only use letters (case sensitive), numbers, $, and _, and the first character cannot be a number
let alertString = 'JavaScript banana';

// constants cannot be changed once they are declared
const HOME_PLANET = 'Earth';
const COLOR_ORANGE = '#FF7F00'; // capital-named constants are used for hard-coded values
const pageLoadTime = 'hypothetical function'; // lowercase-named constants are computed at runtime

// numeric data
let x = 12.345;
let largestNum = 9007199254740991;
let huge = Infinity;
let anti_huge = -Infinity;
let mathmaticalError = NaN;
// BigInt data
let abritraryBigInt = 1234567890123456789012345678901234567890n; // appending n makes it a BigInt

// string data
let singleCharacter = 'c'; // no distinct _character_ data type, just strings
let arbiraryString = "either single or double quotes are totally fine";
let backticksString = `embed declared strings by using backticks ${arbitraryString}`;

// boolean data
let isTrue = true;
let isGreater = 4 > 1;
// 0, "", null, undefined, and NaN evaluate to false, they are 'falsy'

// null data
let nullAge = null; // null data is a special type, consisting only of null

// undefined data
let undefinedAge; // undefined means value not yet assigned
let undefinedAgeExplicit = undefined; // you could also assign it this way, but it would be more common to use null in practice

// object data
// 

// symbol data
// 

// use typeof to check a variable or object
// typeof is an operator, not a function, so parentheses are not required
typeof undefined // undefined
typeof 0 // number
typeof 10n // bigint
typeof false // boolean
typeof "bar" // string
typeof Math // object
typeof null // object (recognized as a bug in typeof, null is not an object)
typeof alert // function (technically functions are objects, but typeof gives them special treatment)

// type conversions
let xString = String(x);
let arbitraryNumberString = Number(arbitraryString); // becomes NaN
let numberString = Number("  456  "); // becomes 456
let numberNull = Number(null); // becomes 0
let numberUndefines = Number(undefined); // becomes NaN
let stringBoolean = Boolean("anything") // null or 0 convert to false, anything meaningfulto true

// string operators
let addedConcat = "add" + " " + "to" + " " + "concat"
let unaryPlus = +"   456  " - +"56   " // same as Number()

// increment, decrement, modify
let counter = 1;
++counter; // counter = 2
counter++; // counter = 3
let a = ++counter; // counter = 4, a = 4
let b = counter++; // counter = 5, b = 4 still, counter *returns* 4 before it increments
counter += 5 // counter = 10
counter *= 5 // counter = 50

// strict equality
let crossTypeComparison = (0 == false) // true, the different types are converted to Numbers
let crossTypeComparisonStrict = ('' === false) // false, equivalence is checked without type conversion
let nullUndefined = (null == undefined) // true, just a thing, a special case, and each do not equal any other value
let nullUndefinedStrict = (null === undefined) // false, different types
let nullUndefinedCompare = (null > undefined) // false, null converts to 0, undefined to NaN

// simple interactions, used for testing mainly
alert(alertString);
userResponse = prompt('what are you putting in here?', 'something nice?');
confirmResponse = confirm('what do you say?')

// ? conditional syntax
let accessAllowed = (age > 18) ? true : false; // can use '?' as a shortcut, but often reduces readability

// logical operators: ||, &&, !, ??
let orTruth = (0 || "" || NaN || null || undefined || 'none of the above') // OR returns the first truthy value, or the last value if all falsy
let andTruth = (True || 2 || null || 'something') // AND returns the first falsy value, or last value if all are truthy
let andPrecedence = 1 && 0 || 1 && 0 // false; && higher precedence than ||, evaluated first
// ?? is like ||, but only evaluates null and undefined as falsy. 0, "", null, considered truthy. Good for null checks.

// loops - while..., do...while, for...
let i = 1
for (; ; i<10) {alert(i++);} // can omit an argument of the for loop, but need to keep semicolons

// break, continue, labels
// break leaves the loop, continue iterates, labels allow you to quit an outer loop from within an inner loop

// switch
// evaluates with ===
// performs ALL cases after a match, unless broken

// functions
function defaultArgument (i = 1) { alert(i);} // you can default an argument, similar to R
let funcExpression = function() { alert('hey buddy'); } // function expressions are a different way to instantiate function
// function *declaration* has block scope (within an if block for instance)

// arrow functions
let sum = (a, b) => a + b; // and other alterations...
