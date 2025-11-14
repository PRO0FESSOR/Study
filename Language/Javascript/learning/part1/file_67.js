
// sets 

//const numbers = new Set([1,2,3]);
//console.log(numbers);

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(3);
console.log(numbers);

const val = numbers.has(6) ? true : false;
console.log(val);
