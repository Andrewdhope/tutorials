// just some notes and tips on coding style and tools


// Developer Tools

// Esc to toggle a console (the thing I always close)

// Watch expressions to see them continuously updated

debugger; // sets a breakpoint programatically

// click into the call stack to open the relevant code file


// Coding style

// use backtics to assign a string over multiple lines
let longString = `the old grey mare just aint what she used to be
    aint what she used to be
    aint what she used to be
    `
// not sure how this handles whitespace

// continue/return are often cleaner than if/else when used inside a loop


// Comments

// don't over-comment, self-document with function names
// Standardized block documentation with JSDoc - https://jsdoc.app/


// Automated testing

// write test cases as you go
// Behavior Driven Development (BDD) - combines specification, documentation, and test cases
// Mocha is a platform with a standardized automated testing format, and libraries to display results in HTML - https://mochajs.org/