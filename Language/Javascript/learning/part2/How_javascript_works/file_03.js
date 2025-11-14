
// hoisting in js 
// works because variables are stored in the memory 

console.log(this);
console.log(name);
myAge();


var name  = "alex";
function myAge(){
  console.log("my age is 53");
}


