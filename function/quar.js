const prompt = require('prompt-sync')();

let a = prompt("Enter First Number ")
let b = prompt("Enter Second Number ")
let c = prompt("Enter Third Number  ")

function findroots(){
    let d =(b*b) - (4*a*c)
    let root1 =(-b +(Math.sqrt(d)))/(2*a)
    let root2 =(-b-(Math.sqrt(d)))/(2*a)

    console.log(root1,root2)
}

findroots()











