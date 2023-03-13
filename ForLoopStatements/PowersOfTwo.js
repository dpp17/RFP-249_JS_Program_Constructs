/*
Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
*/
const prompt = require("prompt-sync")();

function powerOfTwo(number){
    if(number >=1) {
        var two = 1;
        for(var i = 1;i <=number;i++){
            two = two*2;
                console.log("2^"+i+" = " + two);
        }
        return two
    }
    if(number == 0) return 1;
}

var inputNumber = prompt(" Enter number :: ");
console.log(" Power of '2' if powered value is :: " + powerOfTwo(inputNumber));