// Promise is used when we want to do something that takes time to complete
// but not freeze main the program, Promise will run in the background while program do something else
// When Promise is settled, it will bring program to execute code related to that promise

export function booleanCookiePromise(value) {
  return new Promise((resolve, reject) => {
    if (value === true) resolve({ cookie: 1 });
    else if (value === false) resolve({ cookie: 0 });
    else reject('Only accept boolean');
  })
}

const recievedCookie = booleanCookiePromise(true);
console.log(1, recievedCookie); // Promise { { cookie: 1 } }

const unhandledRejectedCookie = booleanCookiePromise(0); // This line will log error because it rejects and is not handled
// Promise reject = Throw in C#, should be handled as if error