var base = prompt("Enter Base =");
var height = prompt("Enter Height =");

base = parseFloat(base, 10);
height = parseFloat(height, 10);
var area_square = base * height;

document.write("<h2>Area of Square :" + area_square + "</h2><br>");
document.write("<h2>Area of Rectangular :" + area_square + "</h2><br>");

var area_triangle = (base * height) / 2;
document.write("<h2>Area of Triangle :" + area_triangle + "</h2><br>");

var a = parseFloat(prompt("Enter the upperside value:"));
var b = parseFloat(prompt("Enter the baseside value:"));
var area_trapizium = (a + b) * height / 2;
document.write("<h2>Area of Trapizium :" + area_trapizium + "</h2><br>");

var area_parallogram = base * height;
document.write("<h2>Area of Parallogram :" + area_parallogram + "</h2><br>");