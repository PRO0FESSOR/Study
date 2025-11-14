
// prototype in js 

function hello(){
  console.log("inside hello");
}

console.log(hello.prototype)

hello.prototype.code = 1234;

console.log(hello.prototype);
