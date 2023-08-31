
let A = (s) => {
    s=s+1
    if(s==20){
        return
    }
    console.log("hello")

    A(s)
    

}
let s = 10
A(s)