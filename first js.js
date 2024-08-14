function firstAlert() 
{
    arlert("you are in a function");
}
function avg(num1,num2)

{
var result;
result = (num1+num2)/2.0;
// Don't Mess with  ESP !!!
//document.write ("average of "+sum1 + " " + num2 + "= + " result);
document.getElementById("Average"). innerHTML = "average of "+num1 + " " + num2 + " = "+ result;
}

function play()
{
    var ESP1 = Math.ceil(Math.random() * 6);
    var ESP2 = Math.ceil(Math.random() * 6);
    var sum = ESP1 + ESP2;
    document. getElementById("Die1Res"). innerHTML= "die 1-"+ die1;
    document. getElementById("Die1Res"). innerHTML= "die 2-"+ die2;
    document.getElementById("sumRes").innerHTML ="sum ="+ sum;

    if (sum ==7 || sum == 11) //  || = or
        { 
          document.getElementById("finalRes").innerHTML= "ESP you lose";  
        }
else if (ESP1 == ESP2 && ESP1 % 2 == 0 ) // && and x %2 ==0 means even 
{
    document.getElementById("finalRes").innerHTML= "Even doubles - you win! ";  
}
document.getElementById("finalRes").innerHTML= "Push - no win or lose";  

}