// miscellaneous content

// generators
function* generateSequence() {
    yield 1; // yield instead of return
    yield 2;
    yield 3;   
}
// generators return a iterable set of values, using the yield operator
// the outer code and the generator may exchange results via next/yield calls
// async function* ... allows for asynchronous generators, build on Promise framework


// modules
// a module is just a file, and it uses export/import to exchange functions and varibables to other modules


// proxy
let proxy = new Proxy(target, handler);
// a proxy object wraps another object and intercepts operations, like reading/writing properties and others
// it will either handle them on its own, or transparently allow the object to handle them
