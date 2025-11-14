
// proto in objects

const obj1 = {
  key1 : "value1",
  key2 : "value2"
}

//const obj2 = {
//  key3 : "value3"
//}

console.log(obj1.key2);

const obj3 = Object.create(obj1);
obj3.key3 = "value3";

console.log(obj3.key1);
