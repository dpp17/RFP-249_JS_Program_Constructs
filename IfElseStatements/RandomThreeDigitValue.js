/*
Ques::
-->> Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value.
*/
function getRandomNumber(){
    return Math.floor(Math.random()*1000);
}

var numberOne = getRandomNumber();
var numberTwo = getRandomNumber();
var numberThree = getRandomNumber();
var numberFour = getRandomNumber();
var numberFive = getRandomNumber();

function getMaximum(one,two,three,four,five){
    if(one > two && one > three && one > four && one > five) return one;
    if(two > one && two > three && two > four && two > five)  return two;
    if(three > two && three > one && three > four && three > five)  return three;
    if(four > two && four > three && four > one && four > five)  return four;
    if(five > two && five > three && five > four && five > one)  return five;
}

function getMinimum(one,two,three,four,five){
    if(one < two && one < three && one < four && one < five)  return one;
    if(two < one && two < three && two < four && two < five) return two;
    if(three < two && three < one && three < four && three < five) return three;
    if(four < two && four < three && four < one && four < five) return four;
    if(five < two && five < three && five < four && five < one) return five;
}

console.log(" Number_1 :: " + numberOne+ '\n' + " Number_2 :: " + numberTwo+ '\n' + " Number_3 :: " + numberThree+ '\n' + " Number_4 :: " + numberFour+ '\n' + " Number_5 :: " + numberFive + '\n');
console.log(" Greatest_Among_Five_Number :: " + getMaximum(numberOne,numberTwo,numberThree,numberFour,numberFive));
console.log(" Smallest_Among_Five_Number :: " + getMinimum(numberOne,numberTwo,numberThree,numberFour,numberFive));