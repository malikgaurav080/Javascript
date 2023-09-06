// const s1 = "hii"
// const s2 = 'Hello'

// const s3 = `this is gaurav.....s1 is ${s1} and s2 is ${s2}`

// console.log(s3);

s = "this is gauravv malik"
arr = s.split(' ')
console.log(arr);

console.log(s.charAt(1))

s[1]="u"
console.log(s); //strings are immutable we cant assign the new value inside string

// using the + operator
const message1 = 'This is a long message ' +
    'that spans across multiple lines' + 
    'in the code.'

console.log(message1);
// using the \ operator
const message2 = 'This is a long message \
that spans across multiple lines \
in the code.'
console.log(message2);

console.log(s.substr(5,10));  //it will start from index 5 till 5+10
console.log(s.slice(5,10)); // it will start from index 5 till 9

s2 = "        h i i             "
console.log(s2.trim())
console.log(s2.includes('h'));
console.log(s2.search('h'));

