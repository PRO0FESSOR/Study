
// nested destructuring 
const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

const [{firstName}, {userId:id} , {gender}] = users;

console.log(firstName);
console.log(id);
console.log(gender);

// using :variable in object destructuring we can provide name for example id above 
