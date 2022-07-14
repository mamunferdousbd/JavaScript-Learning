/*=========================
For Loop In array
==========================*/

var num =[20,10,20,30,50];
var sum =0;

for(var x = 0; x <5 ; x++){
    document.write(num[x]+"<br> ");
    sum = sum +num[x];
}
document.write("Sum ="+sum);
document.write("<h2>End</h2>");
/*==============================
For Loop In array by user input
==========================*/
var num = new Array();
for(var i= 0; i<5; i++){
    num[i]= parseFloat(prompt("Enter the Number :"));
    document.write("User Enter Number : "+num[i] +" <br> ");
}
var sum = 0;
for(var x =0; x<5; x++){
    
    sum =sum + num[x];

}
document.write("Sum = "+ sum);




