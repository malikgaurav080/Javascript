// flow control:
// if else
// for
// while
// do while
// switch

// Keywords --> continue and break 


// and ---> if both condition true then it will return true
// or --> if one condition is true then it will give true


let marks = -1

//if marks< 30 and greater>0--> fail 
// if marks > 30 and <60 --> pass
//if marks > 60 --> grade A

if(marks>0 && marks<30  ){
    console.log("Fail");
}else if(marks> 30 && marks<60){
    console.log("pass");
}
else if(marks> 60 && marks<=100) {
    console.log("Grade A");
} else{
    console.log("Invalid Marks");
}


// For loop
// before ES6
let arr = [ 1,4,5,7,8,9,6,4,4, '4', '4']
// for(let i=0; i<=10; i++){
//     console.log(i);
// }

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// After ES6 --> for of and for in

//for of
// for(let ele of arr){
//     if(ele === 4){
//         continue
//     }
//     console.log(ele);
// }

//for in
// for(let ele in arr){
//     if(ele === 4){
//         continue
//     }
//     console.log(ele);
// }


// == and ===


