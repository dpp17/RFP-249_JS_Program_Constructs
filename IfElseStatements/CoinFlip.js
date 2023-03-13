/*
Ques::
Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly. 
 */
var outcome = Math.floor(Math.random()*10)%2;
console.log(outcome);

if(outcome == 0) console.log(" :: Head ::");
else console.log(" Tails ");