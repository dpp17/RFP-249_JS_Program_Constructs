/*Ques::
Read a Number and Display the week day (Sunday, Monday,...)
*/

var weekDayNumber = Math.floor(Math.random()*7);
var weekDayInWord = " ";
switch(weekDayNumber){
        case 0:
            weekDayInWord = "Sunday";
            break;
            case 1:
                weekDayInWord = "Monday";
                break;  
                case 2:
                    weekDayInWord = "Tuesday";
                    break;  
                    case 3:
                        weekDayInWord = "Wednesday";
                        break;  
                        case 4:
                            weekDayInWord = "Thursday";
                            break;  
                            case 5:
                                weekDayInWord = "Friday";
                                break;  
                                case 6:
                                    weekDayInWord = "Saturday";
                                    break; 
                                    default:
                                        weekDayInWord = "Invalid Input"
    }
console.log(weekDayInWord);
