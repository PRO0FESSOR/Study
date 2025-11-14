
// lexical scope

const myVar = 200;

const app = () => {
  
  //const myVar = 100;

  function print(){
   // const myVar = 50;
    console.log(`value of myVar is  -> ${myVar}`);
  }

  console.log("inside app");
  print();

}

app();
