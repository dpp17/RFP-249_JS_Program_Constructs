const prompt = require("prompt-sync")();

const partTimeHrs = 4;
const fullTimeHrs = 8;
const checkHrs = 160;
const checkDays = 20;
var check = 0;
var days = 0;
var hrs = 0;

function getHrs(option){
    switch (option) {
        case "1":
            console.log(checkHrsOrDaysReachFirst(partTimeHrs))
            if(days == 20) console.log(" Max days Reached First :: ");
            else if(hrs == 160) console.log(" Max hrs Reached First :: ");
            break;
        case "2":
            console.log(checkHrsOrDaysReachFirst(fullTimeHrs))
            if(days == 20) console.log(" :: Max days Reached First :: ")
            else if(hrs == 160) console.log(" :: Max hrs Reached First :: ")
            break;
        default:
        console.log(" ----- :: Invalid Input :: -----")
    }
}

function checkHrsOrDaysReachFirst(hr){
    while(check != 1){
        hrs = hrs + hr;
        if(hrs%hr == 0){
            days++;
        }if(days == checkDays){
            check = 1;
        }if(hrs == checkHrs){
            check = 1;
        }
    }
    return "Total Hrs :: " + hrs + "  Total Days :: " + days
}

getHrs(prompt("Press:1 => Part_Time  or  Press:2 => Full_Time :: "))