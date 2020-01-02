import { booleanCookiePromise } from './promise-a';

// To Handle Promise properly, use `<Promise>.then()` and `<Promise>.catch()`
booleanCookiePromise(0)
  .then(result => console.log(2, result) /* not logged */)
  .catch(err => console.error(3, 'Promise Catched: ' + err))
// or
const trycatch = async () => { // `async` function allow the use of `await` keyword with in that function
  try {
    const result = await booleanCookiePromise(0); // `await` unwrap Promise result (return ready-to-use value)
    console.log(4, result); /* not logged */
  } catch (err) {
    console.error(5, 'TryCatch Catched: ' + err);
  }
}
trycatch()


// main program & background promise execution order
function delay(milliseconds = 1000) {
  return {
    exec: func =>
      new Promise(resolve =>
        setTimeout(() =>
          resolve(func), milliseconds
        )
      )
  };
}
const delayedCookie = delay(500).exec(booleanCookiePromise(false));
delayedCookie.then(result => console.log(6, '(0.5 seconds later)', result));
booleanCookiePromise(true).then(result => console.log(7, result));
booleanCookiePromise(-1).catch(err => console.error(8, 'Catched: ' + err)); // Absence of `<Promise>.then()` make this line settled before
console.log(9, delayedCookie); // Promise that are not settled will log pending

// Code will execute synchronously from top to bottom (1, 9)
// Promise code will arrive in order of completion (7, 8, 3, 5, 6)


// parallel promise
const time = new Date()
const multiplePromises = [
  booleanCookiePromise(true),
  delay(3000).exec(booleanCookiePromise(false)),
  delay(1000).exec(booleanCookiePromise(true)),
]
Promise.all(multiplePromises).then(results => console.log(new Date() - time + 'ms', results))