const a =4;

const myFirstPromise = new Promise((resolve, reject) => {
    if(a>5){
        resolve("Promise success value return from resolve")

    }else{
        reject("Promise failed Value return from reject")
    }
  });
  
myFirstPromise.then((success) => {
    console.log(success);
  })
  .catch((rejectValue)=>{
    console.log(rejectValue);

  })
  .finally(()=> console.log("THis block will aalwayas execute"))

