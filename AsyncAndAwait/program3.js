/**
 * The syntax to use await is:

//?let result = await promise;

The use of await pauses the async function until the promise returns a result (resolve or reject) value.
 */

// a promise
let promise = new Promise((resolve, reject) =>{
    setTimeout(() =>{
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();