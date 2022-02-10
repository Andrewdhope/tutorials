// Going to keep going with mostly just notes here,
//   pretty low level concepts that aren't aided by examples.

// CREATING OBEJCTS WITH PROPERTIES

// creating objects with 'object literal' syntax
let user = {
    name: "John",
    age: 30,
    "is admin": true, // multi-word property allowed if quoted
    undefinedProperty: undefined,
}

// creating objects by calling into a constructor
let guy = new Object(); // uses default Object constructor

// properties names can be strings or Symbols, 
//   values can be of any type

// use dot notation to access a property quickly
let userName = user.name;

// use square brackets in advanced situations like multi-word keys, or variables as keys
let years = "age";
let userAge = user[years];

let isAdmin = user["is admin"];

// delete a property with delete obj.prop
delete user.age;

// you can use variables as keys with square brackets for object literals
let fruit = "apple"
let bag = {
    [fruit]: 5
}

// special shorthand for constructors - sets the variable names as the property name
function MakeUser(name, age) {
    return {
        name,
        age
    }
}

// test if a property exists using 'in' operator, even if property's value is undefined
alert("age" in user); // true, property "age" exists
alert("undefinedProperty" in user) // the left side must be in quotes

// the for...in loop iterates through all properties in and object automatically, nice.
for (let prop in user) {
    alert(user[key])
}


// ALRIGHT, KEEPING THE REST BRIEF!!!


// OBJECT REFERECE AND COPYING

// objects are assigned and copied *by reference*, numerous consequences
// to clone an object, use Object.assign for a shallow-copy (nested objects are still copied by reference), or a deep-cloning library function


// OBJECT METHODS, THIS

// methods define functions an object can perform
// *this*, when used in a constructor, uses an object's own properties
// *this*, when called in code, refers to the calling object 
// arrow functions have no 'this' (a decent reason not to use them)


// CONSTRUCTORS

// essentially functions, capital case as the standard convention
// similar to other languages, define properties, methods, 
// always created with `new` operator


// OPTIONAL CHAINING `?.`

// normally, an object without a property would return an error
// using obj?.prop1?.prop2 will instead return undefined if prop1 or prop2 are missing
// also works with obj.method?.() or obj?.[prop]


// THE SYMBOL TYPE

// Symbol is a primitive type used for unique identifiers
// use Symbol to define 'hidden' properties, mainly used for objects that you don't own
// a Symbol propery won't be known outside of your script (not included in the for...in loop)
// assign a Symbol to a variable at any scope, or access the global Symbol registry with Symbol.for(key)


// OBJECT TO PRIMITIVE CONVERSIONS

// no custom mathmatical operators for objects (unlike C#)
// can define custom object-to-primitive conversion in the obj[Symbol.ToPrimative](hint) method
//   or in the obj.toString() method