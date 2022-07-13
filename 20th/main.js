var i = 1;
while(i <= 10){
document.write(i +"<br>");
    i++;
}
document.write("<h2>End</h2>");

// 1+2+3+4+5+6+7+8+9+10 =?

var i= 1;
var sum =0;
while(i<=10){
    sum =sum +i;
    i++; 
}
document.write(" Sum =" +sum);
document.write("<h2>End</h2>");
// 2+4+6+8+10..........+100
var i= 2;
var sum =0;
while(i <=100){
sum= sum +i;
i=i+2;
}
document.write("Sum Of Even Number = "+ sum);
document.write("<h2>End</h2>");
// 1+3+5+7+9..........+99
var i= 1;
var sum =0;
while(i <=99){
sum= sum +i;
i=i+2;
}
document.write("Sum Of Odd Number = "+ sum);
document.write("<h2>End</h2>");
document.write("<h2>Home Task</h2>");
// Write a progam that will print of all number  which is divisable by 3 and 5 from 1-100
var i =1;
var sum = 0;
while(i <= 100){

    if(i%3==0 && i%5==0){
        sum = sum +i;
        document.write(" "+i);
    }
    i=i+1;
}

document.write("Sum of = "+sum);



