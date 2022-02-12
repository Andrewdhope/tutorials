// variable scope and the lexical environment
// basically, variables initialized with *let* exist at block level (aka within squiggly brackets)
// any uninitialized variables fall back to the outer block, so on and so on to the global context

// a closure is a function that remembers its outer variables and can access them
// in JavaScript, all functions are naturally closures

// global variables now use gobalThis.yourProperty, should be avoided whenever possible

// ...rest parameters are used to create functions that accept any number of arguments (the rest arguments are converted into an array)
// spread... syntax is used to pass an array to functions that normally require a list of arguments (the spread array is converted into parameters)

// function expression vs. declaration, reiterated, with a note on NFE
function functionDeclaration() {return true;} // function declaration exists apart from the codeflow
let functionExpression = function() {return true;} // function expression relies on assignment operator
let namedFunctionExpression = function func() {return true;} // named function expression
// named function expressions can reference themselves (e.g. recursion)
// named function expressions can only be referenced by themselves
// useful for engineering the lexical environment and objects assigned by reference


// function length property returns the number of arguments
// can be used to set up polymorphism through conditional logic

// run funciton once/regularly after delay milliseconds:
// setTimeout(func, delay, ...args), setInterval(func, delay, ...args)
// cleartTimeout, clearInterval with the value returned by setTimeout, setInterval

// Losing _this_ -- once a method is passed somewhere seperately from its object, _this_ is lost
// problematic whenever the inner method references _this_
// solve with call forwarding: func.call(this, ...args), func.apply(this, args)
// bind a function w/ let boundFunc = func.bind(context, [arg1], [arg2]), then call boundFunc(args) with arguments as needed
// can also use partial(func, ...argsBound) as a wrapper to bind arguments w/o context 

// arrow functions do not set _this_, it is taken from outer object lexical environment
// arrow functions do not have arguments, they are meant for short pieces of code that don't need their own context, just take from the current one