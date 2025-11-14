
// undefined 
// null

let firstName;
console.log(typeof firstName);
firstName = "alex";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(myVariable);
console.log(typeof null);
// bug , error 

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);
