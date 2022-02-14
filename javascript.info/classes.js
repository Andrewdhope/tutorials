// class syntax
class sampleClass {
    constructor() {
        this.isTrue = true;
    }
    field = "value";
    firstMethod() {return true;} // no comma between class methods
    nextMethod() {return false;}
}

let mySample = new sampleClass() // class must be called with `new`

// pretty similar to literal objects and most advanced function concepts apply (expressions, get/set, binding)
// class methods, get, and set are written to sampleClass.prototype not directly in the initiated object


// extending a class places it in the chain of inheritance via prototype
// child.prototype.__proto__ will be parent.prototype, so methods are inherited
class extendedClass extends sampleClass {
    extendNewMethod() {return 0;}

    extendFirstMethod() {
        // extend the inherited function by calling it (with super), then modify the behavior
        let firstMethodValue = super.firstMethod()
        return !firstMethodValue; 
    }
}

// can also override a constructor
// consturctors in inheriting class must first call super before using _this_

// can also override class fields, but here be demons
// bonus: arrow functions don't have their own _this_ or super


// KEEPING THE SUMMARY HIGH-LEVEL AS THE CONTENT BECOMES MORE DETAILED


// static properties and methods
// used for data/functionality that belongs to the class "as a whole", rather than to each instantiated object
// static properties and methods are inherited
class staticExample {
    static oneProperty = true;
    static oneMethod() {return true;}
}


// private and protected properties and methods (encapsulation)
// protected fields should be accessed within a class or from an inheriting class
// protected fields start with underscore, but only by convention, not enforced at the language level
// protected fields are enforced with appropriate get/set methods

// private fields start with hash, and are enforced by (new) language standards
// private fields can be accessed within a class, but not from an inheriting class


// check the class of an object with instanceof (includes all inherited classes), returns boolean
// return a string description of certain built-in and basic objects with {}.toString.call(obj)


// mixins are a way to add individual functions into an existing class prototype
let mixinMethodsObject = {
    mixinMethod1() {return true;},
    mixinMethod2() {return true;}
}
class mixinExample {
    constructor(name) {this.name = name;}
}
Object.assign(mixinExample.prototype, mixinMethodsObject)
let isTrue = new mixinExample.mixinMethod1();