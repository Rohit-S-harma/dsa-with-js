const inputString = "price is 123 rupees";
const regExp  = /123/;
const isMatch = regExp.test(inputString);
console.log(isMatch);