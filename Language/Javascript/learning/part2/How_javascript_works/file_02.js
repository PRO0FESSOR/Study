
// how functions are executed in the global execution phase  
// normal func exactly stored in the memory but fuction expression stored as undefined 

hello();
console.log(hey);

function hello(){
    console.log("hello");
}

var hey = function(){
  console.log("hey");
}


hello();
hey();
