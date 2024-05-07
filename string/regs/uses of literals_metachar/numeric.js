const mystring = "my product code is 123-45-6789";
const regExp = /\d{3}/g;
const matches = mystring.match(regExp);
console.log(matches);
