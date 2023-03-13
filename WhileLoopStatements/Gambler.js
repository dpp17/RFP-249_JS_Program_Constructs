/*
Ques::
Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made.
*/

var balance = 100;
const bet = 1;
var goal = 200;
var win = 0;
var lose = 0;

function putBet(){   
    var temp = Math.floor(Math.random()*10);
    if(temp%2 == 0){
        balance = balance + bet;
        win++;
    }else{
        balance = balance - bet;
        lose++;
    }
}

var ref = 1;
while(ref != 0){
    putBet();
    if(balance == 0) ref = 0;
    if(balance == 200) ref = 0; 
}
console.log("balance :: " + balance);
console.log("Wins :: " + win);
console.log(" Loses :: " + lose);