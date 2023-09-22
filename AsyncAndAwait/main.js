const sum = async (a,b)=>{

    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        },2000)    // for holding 2 sec of settimeout, need to create this function inside promise and use await keyword
    }).then(output=>{
        console.log(output);
    })


    return a+b;
}

const sub = async (a,b)=>{

    const s = await sum(a,b);
    console.log(s)
    return a-b;
}

sub(10,5).then((output) => {
    console.log(output);
})