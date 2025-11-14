
// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

const userMethods = {
  about(){
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18(){
    return this.age >= 18;
  }
}

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about; 
    user.is18 =  userMethods.is18;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
