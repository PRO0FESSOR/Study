
// callback functions 

function myFunc(callback){
  callback();  
}

function myFunc2(){
  console.log("inside my func2");
}

myFunc(myFunc2);
