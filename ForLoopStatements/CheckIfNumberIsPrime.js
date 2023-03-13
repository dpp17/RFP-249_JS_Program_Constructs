/*
Ques::
Write a program that takes a input and determines if the number is a prime.
*/

function isPrime(number){
    var count = 0;
    for(var i = 2; i <= number ; i++){
        if(number%i == 0){
            console.log(number);
             count++;
             }
    }
    if (count > 1) console.log("Not a Prime Number :: " + number); 
    else console.log("Prime Number :: " + number);
}

var randomNumber = Math.floor(Math.random()*50);
isPrime(randomNumber);