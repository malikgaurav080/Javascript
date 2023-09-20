// async function example

async function f() {
    console.log('Async function.');
    return Promise.resolve(1);
}

// async function f1() {
//     return 1;
// }



f().then((result)=> console.log(result))
// console.log(f1().then((result)=> console.log(result))) 
