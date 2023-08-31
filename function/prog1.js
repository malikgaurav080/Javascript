let a =10
let b = 15
let c = 20


function largestNumber(){
    if(a>b && a>c){
        //console.log("largest is a = " + a);
        return a
    } else if(b>c && b >a){
        //console.log("largest is b = " + b);
        return b
    }else{
        //console.log("largest is c = " + c);
        return c
    
    } 
}


// console.log(largestNumber())
//let s = "Hello World"

let printHello = function(){
    let s = "Hello World"
    printHii(s)
 
}

let printHii = function(s){
    console.log("hii")
    console.log(s)
}

printHello()

