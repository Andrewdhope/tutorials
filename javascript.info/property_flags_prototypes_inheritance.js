// property flags: writable (can be changed), enumerable (appers in loops), configurable (can be deleted and attributes modified)
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName); // returns a property descriptor object with ALL values and flags
// Object.defineProperty(obj, propertyName, descriptor)
// Object.defineProperties, Object.getOwnPropertyDescriptors
// read-write settings at the object level
//   - Object.PreventExtensions(obj), Object.isExtendable(obj)
//   - Object.seal(obj), Object.isSealed(obj)
//   - Object.freeze(obj), Object.isFrozen(obj)

// accessor properties: get, set
// can use getters and setters to control property access
// can wrap up a second _property that stores the value, with the get/set property controlling access
// can use get to create 'virtual' properties calculated with a function
// accessor properties have no value or writable flags, just enumerable and configurable

// [[Prototype]] property is either null or references another object
// properties and methods are inherited from a prototype, and from all parents (including built-in objects like Array, and up to Object itself)
// object.__proto__ is the get/set property, it is a way to access [[Prototype]], but is being deprecated
// Object.getPrototypeOf, Object.setPrototypeOf are the newer versions, along with Object.create(proto, [descriptors])

// for methods in an object's prototype, _this_ is always the object before the dot (else any inherited object could set into the prototype)

// for..in will loop over inherited properties, can use obj.hasOwnProperty(key) to return true only if property is not inherited
// almost all other key/value-getting methods ignore inherited properties, such as Object.keys or Object.values

// the F.prototype property sets [[Prototype]] of new objects when (and only when) new F() is called