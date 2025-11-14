

// splice method 
// start , delete , insert 

const arr = [1,2,3,4,5,6,7,8,9,10];

//delete
arr.splice(1,2);
console.log(arr);


//insert
arr.splice(1,0,2,3);
console.log(arr);

// insert and delete 
arr.splice(0,2,-1,-2);
console.log(arr);
