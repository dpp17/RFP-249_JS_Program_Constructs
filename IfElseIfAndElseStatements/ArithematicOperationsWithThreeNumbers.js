/*
Ques::
Enter 3 Numbers do following arithmetic operation and find the one that
is maximum and minimum
        
        1. a + b * c            3. c + a / b
        2. a % b + c            4. a * b + c
*/

var numberOne = Math.floor(Math.random()*10);
var numberTwo = Math.floor(Math.random()*10);
var numberThree = Math.floor(Math.random()*10);

console.log("NumberOne :: " +numberOne+'\n'+"NumberTwo :: " +numberTwo+'\n'+"NumberThree :: " +numberThree);
var operationOne = numberOne + (numberTwo * numberThree);
var operationTwo = (numberOne%numberTwo) + numberThree;
var operationThree = numberThree + (numberOne/numberTwo);
var operationFour = (numberOne*numberTwo) + numberThree;

if(operationOne > operationTwo && operationOne > operationThree && operationOne > operationFour) console.log(" :: {1. a + b * c} is maximum :: ");
else if(operationTwo > operationOne && operationTwo > operationThree && operationTwo > operationFour) console.log(" :: {2. a % b + c} is maximum :: ");
else if(operationThree > operationTwo && operationThree > operationOne && operationThree > operationFour) console.log(" :: {3. c + a / b} is maximum :: ");
else if(operationFour > operationTwo && operationFour > operationThree && operationFour > operationOne) console.log(" :: {4. a * b + c} is maximum :: ");
else console.warn(" :: Multiple_Maximum_Operation_Occur :: ");

if(operationOne < operationTwo && operationOne < operationThree && operationOne < operationFour) console.log(" :: {1. a + b * c} is minimum :: ");
else if(operationTwo < operationOne && operationTwo < operationThree && operationTwo < operationFour) console.log(" :: {2. a % b + c} is minimum :: ");
else if(operationThree < operationTwo && operationThree < operationOne && operationThree < operationFour) console.log(" :: {3. c + a / b} is minimum :: ");
else if(operationFour < operationTwo && operationFour < operationThree && operationFour < operationOne) console.log(" :: {4. a * b + c} is minimum :: ");
else console.warn(" :: Multiple_Minimum_Operation_Occur :: ");