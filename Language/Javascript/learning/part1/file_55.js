
// function returning a function 

function myFunc(){
  function hello()
  {
    console.log("hello called")
  }

  return hello;

}

const ans = myFunc();
console.log(ans());
