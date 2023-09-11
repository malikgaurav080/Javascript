arr1=[1,3,4,4,4,3,4,3,6,7,8,9]
arr = []
for(let ele of arr1){
    if(!(arr.includes(ele))){
        arr.push(ele)
    }
}
console.log(arr)


