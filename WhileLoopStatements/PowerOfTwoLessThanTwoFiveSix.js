/*
Ques::
Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached..
*/
const prompt = require("prompt-sync")();

function powerOfTwo(number){
    if(number >=1 && number <=8) {
        var two = 1;
        var i = 0;
       while(i!=number){
            two = two*2;
            i++;
        }
        return two
    }
    if(number == 0) return 1;
    else console.log(" :: Invalid Input :: ")
}

var inputNumber = prompt(" Enter power less than 9 :: ");
console.log(" Power of '2' if powered value is :: " + powerOfTwo(inputNumber));