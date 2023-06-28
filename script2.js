// Problem Statement:
// Task 2: Count the Number of Vowels
// Write a function called countVowels that takes a string as input and returns the number of vowels (a, e, i, o, u) present in the string. For example, if the input is "hello world", the function should return 3.

const countVowels = str => {
  let elements = "";
  let numOfVowels = 0;
  str.split("").forEach(element => {
    if (
      element.includes("a") ||
      element.includes("e") ||
      element.includes("i") ||
      element.includes("o") ||
      element.includes("u")
    ) {
      numOfVowels++;
    }
  });
  return numOfVowels;
};

console.log(countVowels("Adnan"));
