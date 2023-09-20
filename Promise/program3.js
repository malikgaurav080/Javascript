
// !Promise Chaining
// /Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.


let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  
  countValue
    .then((result) => {
      console.log(result);
    })
  
    .then( () => {
      console.log("You can call multiple functions this way.");
    });