// const sumAsync  = async (a,b)=>{
//     return a+b
// }


const sumAsync  = async (a,b)=>{
    s=  a+b
    return Promise.resolve(s)    //both are same
}

const SumSync = (a,b)=> {
    return a+b
}


sumAsync(2,3).then((output)=>{
    console.log(output);
});


console.log(SumSync(2,3));