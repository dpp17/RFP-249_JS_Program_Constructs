/*Ques::
Read a Number and Display the week day (Sunday, Monday,...)
*/

var weekDayNumber = Math.floor(Math.random()*10)%7 + 1;

if(weekDayNumber == 1){
    console.log(" :: Monday :: ");
}else if(weekDayNumber == 2){
    console.log(" :: Tuesday :: ");
}else if(weekDayNumber == 3){
    console.log(" :: Wednesday :: ");
}else if(weekDayNumber == 4){
    console.log(" :: Thursday :: ");
}else if(weekDayNumber == 5){
    console.log(" :: Friday :: ");
}else if(weekDayNumber == 6){
    console.log(" :: Saturday :: ");
}else if(weekDayNumber == 7){
    console.log(" :: Sunday :: ");
}
