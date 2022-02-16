// Async
// the word “async” before a function means one simple thing: a function always returns a promise
// other values are wrapped in a resolved promise automatically

// for instance, this function returns a resolved promise with the result of 1
async function f() {
    return 1;
}

f().then(alert); // 1

// we could explicitly return a promise, which would be the same:
async function fn() {
    return Promise.resolve(1);
}

fn().then(alert); // 1

// so, async ensures that the function returns a promise, and wraps non-promises in it


// Await
// works only inside async functions 
let value = await promise;

// the keyword await makes JavaScript wait until that promise settles and returns its result

async function fnc() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // // the function execution “pauses” and resumes when the promise settles
  
    alert(result); // "done!" (after one second)
  }
  
fnc();

// async/await is just a more elegant syntax of getting the promise result than promise.then

// handle errors inside of async function using a normal try..catch pattern

// common to combine with async with Promise.all to wait for multiple promises

// CAN USE ASYNC/AWAIT ALMOST EXCLUSIVELY, RATHER THAN EXPLICIT PROMISES, THOUGH ASYNC/AWAIT ARE BUILT ON PROMISES FRAMEWORK