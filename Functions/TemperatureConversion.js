/*
Ques::
Help user find degF or degC based on their Conversion Selection. Use Case Statement and ensure that the inputs are within the Freezing Point (
0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
                    a. degF = (degC * 9/5) + 32
                    b. degC = (degF – 32) * 5/9
*/
const prompt = require("prompt-sync")();
//const promptOne = require("prompt-sync")();

var degF = 0.00;
var degC = 0.00;

console.log(" 1. degC to degF :: "+'\n'+" 2.degF to degC :: "+'\n');
var option = prompt(" Enter Option :: ");
switch (option) {
    case "1":
        var temperature = prompt(" Enter Temperature in degC :: ");
        convertTemperatureToDegF(temperature);
        break;
    case "2":
        var temperature = prompt(" Enter Temperature in degC :: ");
        convertTemperatureToDegC(temperature);
        break;
        console.log(" ----- Invalid Input ------ ");
    default:
}

function convertTemperatureToDegC(temperature){
    degC = (temperature - 32) * (5/9); 
    console.log(" degF :: " + temperature + " to degC :: " + degC);
}
function convertTemperatureToDegF(temperature){
    degF = (temperature * (9/5)) + 32;
     console.log(" degC :: " + temperature + " to degF :: " + degF);
}