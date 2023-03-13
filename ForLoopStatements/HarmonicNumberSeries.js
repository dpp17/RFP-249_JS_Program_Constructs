/*
Ques::
Write a program that takes a command-line argument n and prints the nth harmonic number. Harmonic Number is of the form
*/
const prompt = require("prompt-sync")();

function getHarmonic(number){
    var string = "";
    var harmonicSum = 1;
    for(var i = 2; i<= number;i++){
        harmonicSum= harmonicSum + (1/i);
        string = string + "1/" + i + " + ";
    }
    console.log(" Harmonic Series :: " + string);
    console.log(" Sum of harmonic value :: " + 1/harmonicSum);
}

getHarmonic(prompt(" Enter number for Harmonic Series :: "));