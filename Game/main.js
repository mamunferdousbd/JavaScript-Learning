

var countWon = 0;
var countLost = 0;
for(var i= 1; i < 6; i++){
    var number = parseFloat(prompt("Enter Your Number : "));
    var  guessingNumber = Math.floor(Math.random()*5)+1;
    
    if(guessingNumber == number){
        document.write("The Guessing Number was :"+number+"<br>");
        document.write("The Actual Number was :"+ guessingNumber+"<br>");
        document.write("You have won ."+"<br>");
        countWon++;
    }else{
        document.write("The Guessing Number was :"+number+"<br>");
        document.write("The Actual Number was :"+ guessingNumber+"<br>");
        document.write("You have lost ."+"<br>");
        countLost++;
    }

}
document.write("You Have Won : "+countWon+" Times"+"<br>");
document.write("You Have Lost : "+countLost+" Times");

