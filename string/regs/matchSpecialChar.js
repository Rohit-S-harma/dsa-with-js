const inputString = "this expression . matches any single character except mewline";
const regExp = /\./;
const isMatch = regExp.test(inputString);
console.log(isMatch);