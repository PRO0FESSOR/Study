
// map method 
// same like for each but requires a return statement as it returns an array

const numbers = [2,5,1,6,7,8];

const sqaureNumbers = numbers.map((val)=>{
  let sq = val*2;
  return sq;
})

console.log(sqaureNumbers);
