/*
Ques::
Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
*/

var valueTemp = [1,10,100,1000,10000];

var randomChoice = Math.floor(Math.random()*10)%5;


switch(valueTemp[randomChoice]){
    case valueTemp[0]:
        console.log(" :: One :: ");
        break;
        case valueTemp[1]:
            console.log(" :: Ten :: ");
            break;  
            case valueTemp[2]:
                console.log(" :: Hundred :: ");
                break;  
                case valueTemp[3]:
                    console.log(" :: Thousand :: ");
                    break;  
                    case valueTemp[4]:
                        console.log(" :: Ten-Thousand :: ");
                        break;  
                        default:
                            console.log("Invalid Input");
}
