/*==================================================
Check Positive or negative number by condition
==================================================*/
// var num = parseFloat(prompt("Enter the Number : "));

// if( num > 0){
//     document.write(" Positive");
// }
// else if(num < 0){
//     document.write(" Negative");
// }
// else{
//     document.write("Zero");
// }

/*=========================================================
Check Positive or negative number by Ternary Operator
=========================================================*/
/*=========================================================
For two conditions
=========================================================*/
// var num = Number(prompt("Enter the Number : "));
// num > 0 ? document.write("Positive"):document.write("Negative"); 
/*==================================================
 For more conditions
 ==================================================*/
// var num = Number(prompt("Enter the Number : "));
// var result = num > 0 ?  document.write("Positive") : num < 0 ? document.write(" Negative") : document.write("Zero");

/*============================================== 
Code for larger Number between two numbers
==============================================*/

// var num1 = Number(prompt("Enter the First Number : "));
// var num2 = Number(prompt("Enter the Second Number : "));

// num1 > num2 ? document.write("Number One "): document.write(" Number Two");

/*============================================== 
Code for larger Number between Three  numbers By condition
==============================================*/
// var num1 = Number(prompt("Enter the First Number : "));
// var num2 = Number(prompt("Enter the Second Number : "));
// var num3 = Number(prompt("Enter the Third Number : "));

// if(num1 > num2 && num1 > num3){
//     document.write("Number one is Large");
// }else if (num2 > num1 && num2 > num3){
//     document.write("Number Two is Large");
// } else{
//     document.write("Number Three is Large");
// }

/*============================================== 
Code for larger Number between Three  numbers By ternary Operator
==============================================*/
var num1 = Number(prompt("Enter the First Number : "));
var num2 = Number(prompt("Enter the Second Number : "));
var num3 = Number(prompt("Enter the Third Number : "));
var result = num1> num2 && num1 > num3 ? "One" : num2> num1 && num2 > num3 ? "Two": "Three" ;
document.write(result);
