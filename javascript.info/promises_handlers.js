// Callbacks
// passing a function as a variable, which executes once the initial action is complete (onload, onstatuschange, etc)
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(script); // arrow function that returns the callback function and takes script as a parameter
  
    document.head.append(script);
}
// WATCH OUT FOR TRICKY ARROW FUNCTION SYNTAX FOR CALLBACKS


// Promises
// a promise is a special JavaScript object that links the “producing code” and the “consuming code” together
let samplePromise = new Promise(function(resolve, reject) {
    // executor (the "producing code")
});

// the function passed as a parameter into the new Promise is called the executor
// when a new Promise is created, the executor runs automatically
// it contains the producing code which should eventually produce the result (which are either the resolve or reject objects??)
// its arguments resolve and reject are callbacks provided by JavaScript itself, our code is only inside the executor

/*
When the executor obtains the result, be it soon or late, it should call one of these callbacks:
    resolve(value) — if the job is finished successfully, with result value
    reject(error) — if an error has occurred, error is the error object

The promise object returned by the new Promise constructor has these internal properties:
    state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called
    result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called
*/

// simple example
let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
});

// resolve and reject are pre-defined functions that are run by the JavaScript engine
// the code in the promise executor does not create them, just calls them when ready

// a promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise
// a promise can only be settled with one state, any attempts to overwrite the state of a settled promise are ignored 

// if rejecting, send back an Error object (or objects that inherit from Error)


// Consumers
// a Promise object serves as a link between the executor and the consuming function
// consuming functions can be registered (subscribed) using methods .then, .catch, and .finally

// .then
promise.then(
    // often easier to use arrow functions here
    resultFunction = function(result) {/* handle a successful result */},
    errorFunction = function(error) {/* handle an error */}
);

// the first argument of .then is a function that runs when the promise is resolved, and receives the result
// the second argument of .then is a function that runs when the promise is rejected, and receives the error

// when a promise successfully resolves, the resolve funtion runs all of these first parameter functions in .then
// if rejected, the reject runs the (optional) error function
// if a promise is already in the settled state, then the consumers just run as soon as they're called

// .catch
promise.catch(alert); // shows the error object as a string in an alert

// if we’re interested only in errors, then we can use .then with a null first argument: .then(null, errorHandlingFunction)
// or we can use .catch(errorHandlingFunction), which is exactly the same

// .finally
promise.finally(() => alert("Promise ready"));

// similar to .then, runs a single function for both resolve and reject
// unlike .then, .finally has no arguments, so best for general purpose cleanup
// can be used alongside .then and .catch because it simply passes the result and error to the next handler
// ^^^ this concept becomes important when comparing to the behavior of promise chaining ^^^


// Example
// re-writing the callback example above as a promise
function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script); // the result parameter here is named script
      script.onerror = () => reject(new Error(`Script load error for ${src}`)); // the error parameter is a new Error object
  
      document.head.append(script);
    });
}
  
let newPromise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

newPromise.then(
    script => alert(`${script.src} is loaded!`),
    error => alert(`Error: ${error.message}`)
    // why would you use script instead of result? to match with the parameter name in the promise?
);

newPromise.then(script => alert('Another handler...'));


// Chaining
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(result) { 
  
    alert(result); // 1
    return result * 2;
  
  }).then(function(result) { 
  
    alert(result); // 2
    return result * 2;
  
  }).then(function(result) {
  
    alert(result); // 4
    return result * 2;
  
  });

// the whole thing works, because every call to a .then returns a new promise, which we can call the next .then on
// when a handler returns a value, it becomes the result of that promise, so the next .then is called with it (??)
// this is the key to chaining, the result is passed through because the promises/handlers are linked in a chain

// the chain must be built off of the new Promise, as above, not off of a single instatiated promise

// the chained handlers can also return promises, which will pass on the result after each promise settles
// each handler call returns a promise, and the next .then runs when it resolves

// if a .then (or catch/finally, doesn’t matter) handler returns a promise, the rest of the chain waits until it settles
// when it does, its result (or error) is passed further


// Errors
// basically just handle everything with .catch -- analyze, handle, rethrow as needed


// Methods
/*
there are 6 static methods of Promise class:

    Promise.all(promises) – waits for all promises to resolve and returns an array of their results
    if any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
    
    Promise.allSettled(promises) – waits for all promises to settle and returns their results as an array of objects with:
        status: "fulfilled" or "rejected"
        value (if fulfilled) or reason (if rejected).

    Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
    Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome
    if all of the given promises are rejected, AggregateError becomes the error of Promise.any.
    
    Promise.resolve(value) – makes a resolved promise with the given value.
    Promise.reject(error) – makes a rejected promise with the given error.

Of all these, Promise.all is probably the most common in practice.
*/


// Microtasks
// promise handling is always asynchronous
// .then/catch/finally handlers are always called after the current code is finished
// if we need to guarantee that a piece of code is executed after .then/catch/finally, we can add it into a chained .then call