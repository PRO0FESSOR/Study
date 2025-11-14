
//function inside function 

const app = () => {
  const myFunc = () => console.log("inside myfunc");
  console.log("inside app");
  myFunc();
}

app();
