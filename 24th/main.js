
// function Keyword then Name with () then function {Body}
function mamun(){
    var x= 20;
    var y= 30;
    var result = x+y;
    document.write(result+"<br>");
}
// Calling function name();

mamun();
/*=========================
Function for Addition 
=========================*/
function addition(num1,num2){
    var sum = num1 +num2;
    document.write("Addition = "+sum+"<br>");

}
addition(10,20);

/*=========================
Function for Subtraction
=========================*/
function subtraction(num1,num2){
    var sub = num1 - num2;
    document.write("Subtraction = "+sub+"<br>");

}
subtraction(50,100);

/*=========================
Function for Multiplication
=========================*/
function multipliction(num1,num2){
    var mul = num1*num2;
    document.write("Multiplication = "+mul+"<br>");
}
multipliction(500,100);

/*=========================
Function for Division
=========================*/
function division(num1,num2){
    var div = num1 / num2;
    document.write("Division = "+div+"<br>");
}
division(500,100);

/*=========================
Function for Mod
=========================*/
function modulation(num1,num2){
    var mod = num1 % num2;
    document.write("Modulation = "+mod+"<br>");
}
modulation(500,100);