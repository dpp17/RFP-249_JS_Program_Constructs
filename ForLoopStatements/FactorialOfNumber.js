/*
Ques::
Write a program that computes a factorial of a number taken as input.
        5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
*/
var inputNumber = 6;
console.log("Factorial :: ");
getFactorial(inputNumber);

function getFactorial(number){
    var string = "";
    var symbol = "*";
    var factorial = 1;
    for(var i=1; i <=number;i++){
        string = string + i + symbol;
        factorial = factorial * i;
    }
    console.log(number+ " : " +string + " = " +factorial);
}


