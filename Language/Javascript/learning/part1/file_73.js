
// call apply bind

const user = {
  firstname : "alex",
  age : 23,
  techstack : function(language,framework){
    console.log(`the firstName is ${this.firstname} and the age is ${this.age} , ${language} , ${framework} `)
  }
}



const user2 = {
  firstname : "roman",
  age : 24, 
}


//normal calling
user.techstack(2,3);

//call 

user.techstack.call(user,"python","django");
user.techstack.call(user2,"js","angular");

//apply


user.techstack.apply(user,["python","django"]);
user.techstack.apply(user2,["js","angular"]);

// bind

const func = user.techstack.bind(user2,"ruby","rails");
func();

