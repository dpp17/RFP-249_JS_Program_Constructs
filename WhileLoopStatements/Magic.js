/*
Ques::
Find the Magic Number
        a. Ask the user to think of a number n between 1 to 100
        b. Then check with the user if the number is less then n/2 or greater
        c. Repeat till the Magic Number is reached.
*/

const prompt = require("prompt-sync")();

var userInput = prompt("-->> Enter a Number Between 1 to 100 :: ");
var start = 1;
var end = 100;
if(userInput >= start && userInput <= end){
    var mid = end/2;
    var ref = mid;
   while(userInput != mid ){
            if(userInput > mid){
                        start = mid;
                        mid = ((end + mid)/2) + 1;
            }
            if(userInput < mid){
                end = mid;
                mid = ((start + mid)/2) + 1;
        }
   }
   console.log("Your Number :: " + mid);
}else{
    console.log("Enter a valid number");
}


