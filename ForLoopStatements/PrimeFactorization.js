/*
Ques::
Write a program to compute Factors of a number N using prime factorization method.
                    Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
                    O/P -> Print the prime factors of number N.
*/

function primeFactorisation(number){
    for(var i = 1;i <=number ;i++){
        if(number%i == 0){
            isPrime(i);
        }
    }
}

function isPrime(number){
    var count = 0;
    for(var i = 2; i <= number ; i++){
        if(number%i == 0){
             count++;
             }
    }
    if (count == 1) console.log("Prime Number :: " + number); 
}


primeFactorisation(108570);