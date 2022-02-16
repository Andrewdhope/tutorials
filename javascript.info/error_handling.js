// try catch works synchronously, wont catch async calls

try {
    // code
    throw new namedError("Error Message: something brief"); // basic error object will use the object name as the name property
} catch(err) {
    // error handling
    alert(err.name); // name and message required in all error objects
    alert(err.message);
    alert(err.stack); // stack (and others) supported in many environments

    alert(err); // will just show name: message
}

// common pattern is try... catch... rethrow, where you process a known error with catch, and rethrow if the error is something else
try {
    // code
    throw new namedError("Error Message: something brief"); // basic error object will use the object name as the name property
} catch(err) {
    // error handling
    if (err instanceof namedError) {
        alert(err.message);
    } else {
        throw(err); // throws out of this try/catch to be caught in an outer code block
    }
}


// try... catch... finally, the finally block executes after try (if no error) or after catch (due to error)
// use finally to perform any necessary clean-up tasks
// note that variables are still block level within try, catch, and finally
// finally executes even if we reach a return in try
try {
    // code
    return 1;
} catch(err) {
    // error handling
} finally {
    alert('finally');
}


// for custom errors, it is usually best to extend the standard Error class

// The "pseudocode" for the built-in Error class defined by JavaScript itself
class Error {
    constructor(message) {
      this.message = message;
      this.name = "Error"; // (different names for different built-in error classes)
      // this.stack = <call stack>; // non-standard, but most environments support it
    }
  }

// extending the built-in Error class
class ValidationError extends Error {
    constructor(message) {
        super(message); // required (?) to use super to first call the parent contrcutor
        this.name = "ValidationError"; // then reset properties as needed
        // can then use (err instanceof ValidationError) in conditional logic
        // instanceof is preferred over name because it looks up the inheritance chain, where the name property looks only at the current object
    }
}

// useful trick to auto-assign the inherited error's name from the class name
// just need to first extend Error to assign the class name this way
class ProjectError extends Error {
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}
// then extend further with minimal code (used for throwing custom errors)
class ProjectValidationError extends Error {}


// Wrapping Exceptions
// often useful to wrap errors in a hierarchy, general-to-detailed, and perhaps only display the more general error in most cases
// can do this by using the message property as the sub-error name, with a new 'cause' property to hold the sub-error message