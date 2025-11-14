

const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

const myFunc1 = user1.about;
myFunc1();

// user1.about();
const myFunc2 = user1.about.bind(user1);
myFunc2();
