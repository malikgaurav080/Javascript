// ES4 ---> arrow 
a=10
b=20
c=30

let largestNumber =() => {
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

console.log(largestNumber())