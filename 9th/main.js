var number1 = prompt("Enter your First Number");
var number2 = prompt("Enter your Second Number");
number1 = parseFloat(number1, 10);
number2 = parseFloat(number2, 10);
var sum, sub;
sum = number1 + number2;
document.write("Addition:" + sum + "<br>");

sub = number1 - number2;
document.write("Subtraction:" + sub + "<br>");

document.write("<h3>Home Work</h2>");
var num1 = 20;
var num2 = 10;
var sum, sub, mul, div, mod;
sum = num1 + num2;
sub = num1 - num2;
mul = num1 * num2;
div = num1 / num2;
mod = num1 % num2;

document.write(num1 + "+" + num2 + "=" + sum + "<br>");
document.write(num1 + "-" + num2 + "=" + sub + "<br>");
document.write(num1 + "*" + num2 + "=" + mul + "<br>");
document.write(num1 + "/" + num2 + "=" + div + "<br>");
document.write(num1 + "%" + num2 + "=" + mod + "<br>");