
// how to iterate object

const person = {
  name: "alex lionardo",
  age: 26,
  hobbies: ["football","coding"]
}

for(let key in person){
  console.log(key," : ",person[key]);
}

console.log(Object.keys(person));

for(let key of Object.keys(person)){
  console.log(person[key]);
}
