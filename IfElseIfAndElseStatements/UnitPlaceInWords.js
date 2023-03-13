/*
Ques::
Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
*/

var valueTemp = [1,10,100,1000,10000];

var randomChoice = Math.floor(Math.random()*10)%5;

if(valueTemp[randomChoice] == 1){
    console.log(" :: Unit :: ")
}else if(valueTemp[randomChoice] == 10){
    console.log(" :: Ten :: ")
}else if(valueTemp[randomChoice] == 100){
    console.log(" :: Hundred :: ")
}else if(valueTemp[randomChoice] == 1000){
    console.log(" :: Thousand :: ")
}else if(valueTemp[randomChoice] == 10000){
    console.log(" :: Ten-Thousand :: ")
}