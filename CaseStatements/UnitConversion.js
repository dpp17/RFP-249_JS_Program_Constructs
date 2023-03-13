/*
Ques::
Write a program that takes User Inputs and does Unit Conversion of different Length units
                    1. Feet to Inch :: 1ft = 12 inch            3. Inch to Feet :: 1 inch = 0.0833333 ft
                    2. Feet to Meter :: 1ft = 0.3048           4. Meter to Feet :: 1 m = 3.28084 ft
*/

var randomOption = Math.floor(Math.random()*10)%4 + 1;
var smallValue = Math.floor(Math.random()*100);
var bigValue = Math.floor(Math.random()*10000);
var result =0.000000;
switch (randomOption) {
    case 1:
        console.log("   1. Feet to Inch :: ( 1ft = 12 inch )");
        result = smallValue * 12;
        console.log(" Input Value in feet :: " + smallValue+'\n'+ " Output Value in Inch :: " + result);
        break;
    case 2:
        console.log("   2. Feet to Meter :: ( 1ft = 0.3048)");
        result = bigValue * 0.3048;
        console.log(" Input Value in feet :: " + bigValue+'\n'+ " Output Value in meter :: " + result);
        break;
    case 3:
        console.log("   3. Inch to Feet :: ( 1 inch = 0.0833333 ft)");
        result = bigValue * 0.0833333;
        console.log(" Input Value in inch :: " + bigValue+'\n'+ " Output Value in feet :: " + result);
        break;
    case 4:
        console.log("   4. Meter to Feet :: ( 1 m = 3.28084 ft)");
        result = smallValue * 3.28084;
        console.log(" Input Value in meter :: " + smallValue+'\n'+ " Output Value in feet :: " + result);
        break;
    default:
        console.warn("Invalid Input");
        break;
}