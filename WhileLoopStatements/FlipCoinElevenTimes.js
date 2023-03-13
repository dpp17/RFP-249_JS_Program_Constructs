/*
Ques::
Extend the Flip Coin problem till either Heads or Tails wins 11 times.
*/
function toss(){
    var number = Math.floor(Math.random()*10)%2;
    if(number == 0) console.log(" :: Head ::");
    else console.log(" :: Tail ::");
}
const numberOfTimesFlip = 11;
for(var i = 0;i < numberOfTimesFlip;i++){
    toss(i);
}