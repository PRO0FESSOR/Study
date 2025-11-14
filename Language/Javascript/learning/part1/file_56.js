
// for each method

// for each method use first argument as a value and second as a index to perform any operation
// for each method is a higher order function 

const numbers = [1,2,3,4,5];

for(let i in numbers){
  console.log(`index is - ${i} and [ ${numbers[i]} x 2 = ${numbers[i]*2} ] `);
}

console.log(" now using for each ");

numbers.forEach((value,index)=>{
  console.log(`index is - ${index} and [ ${value} x 2 = ${value*2} ] `); 
})
