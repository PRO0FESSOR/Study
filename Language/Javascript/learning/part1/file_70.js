
// optional chaining 
// to get undefined but not an error 
// used when data is not available now but will be available in future and we dont want that our site crash

const person = {
  firstname : 'alex leonardo',
//  address : {housenumber : 24567},
}

console.log(person?.address?.housenumber);
