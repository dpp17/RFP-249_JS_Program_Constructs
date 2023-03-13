/*
Ques::
Extend the program to take a range of number as input and output the Prime Numbers in that range.
*/

function isPrime(number){
    var count = 0;
    for(var i = 2; i <= number ; i++){
        if(number%i == 0){
             count++;
             }
    }
    if (count == 1) console.log("Prime Number :: " + number); 
}
for(var i = 0;i < 100;i++){
        isPrime(i);
}