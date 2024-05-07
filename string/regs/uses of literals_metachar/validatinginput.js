const mystring = "abcD123";
const regExp = /^[a-zA-Z0-9]{7}$/;
const isMatch = regExp.test(mystring);
console.log(isMatch);