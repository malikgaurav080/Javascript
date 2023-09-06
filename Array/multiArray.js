const arr = [[1,2,3], [3,4,5], [4,5,6]]
console.log(arr[1]);
console.log(arr[1][1]);

console.log(arr.flat())  // converted in 1D

arr.push(["abc","def"])
console.log(arr);

arr.push(1)
console.log(arr);

arr.pop()
console.log(arr);

// using index notation
let studentsData = [['Jack', 24], ['Sara', 23]];
studentsData[1][1] = 'hello';
console.log(studentsData);

let student = [['Jack', 24], ['Sara', 23]];
student[1].push("aaaaaaaaaaaa")
console.log(student);