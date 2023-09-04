arr1 = [ 1, 3, 1, 2, 7, 8, "abc"]
arr2 = ["gaurav", "malik"]

function findElement(ele){
    return ele > 6
}

console.log(arr1.find(findElement));
console.log(arr1.findIndex(findElement));


arr1.forEach((element) => {
 console.log(element);
});

// console.log(arr1.forEach((ele) => {
//     return ele
// }))

//console.log(arr2[0][0]);

arr3 = arr1.concat(arr2)

console.log(arr3);
const a = arr1.push(7) //return the new lenghth of an araay
console.log(a)  //new length
console.log(arr1);

arr1.pop()
console.log(arr1);

console.log(arr3.indexOf("gaurav"));

console.log(arr3.includes("malik"));

arr2.unshift("hii")
console.log(arr2)

arr2.shift("hii")
console.log(arr2);

console.log(arr3.sort());
arr4 = arr3.slice(4)
console.log(arr4);

arr3.splice(5,1,10)
console.log(arr3);

console.log(arr3.length);

