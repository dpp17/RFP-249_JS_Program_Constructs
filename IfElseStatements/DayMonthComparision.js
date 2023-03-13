/*
Ques::
Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise.
*/
const prompt = require("prompt-sync")();

const day = prompt(" Enter day :: ");
const month = prompt(" Enter month :: ");

if (month == 3 && day >= 20 && day <= 31) {
  console.log(true);
} else if (month == 4 && day >= 1 && day <= 30) {
  console.log(true);
} else if (month == 5 && day >= 1 && day <= 31) {
  console.log(true);
} else if (month == 6 && day >= 1 && day <= 20) {
  console.log(true);
} else {
  console.log(false);
}