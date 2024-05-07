const inputString = "the cat sat on the mat";
const regexPattern = /cat/;
const isMatch = regexPattern.test(inputString);
console.log(isMatch);




// In this example, we have an input string "The cat sat on the mat.".
// The regular expression pattern /cat/ matches the substring "cat" in the input string.
// We use the test method to check if the pattern matches any part of the input string.
// The output is true because the input string contains the substring "cat"