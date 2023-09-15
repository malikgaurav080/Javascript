// str = "This is Gaurav Malik"
// output ---> "sihT si varuaG kilaM"
function RevStr(str){
    revStr = ""

    for(let n = str.length - 1; n>=0; n--){
        revStr = revStr + str[n]
}
return revStr
}


module.exports = RevStr //for .js extension
 //default export in .mjs extension

// arr = str.split(' ')
// output = []
// for(word of arr){
//     output.push(RevStr(word))
// }

// console.log(output.join(' '))


// str1 = "My name is Gaurav Malik"
// //task join split reverse 
// //note reverse is only for array not string
//  console.log(str1.split('').reverse().join(''));


