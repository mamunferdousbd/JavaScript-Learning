var country = "Bangladesh";
var len = country.length;
document.write("<h4> Number of Character is = " + len + "</h4>" + "<br>");

// var name = prompt("Enter Your Name");
var name = "halim"
var len = name.length;

document.write("Your Enter Length is = " + name.length + "<br>");
var text = "Bangladesh"
var indxNumber = text.charAt(2);
document.write("Your Query Index Number Character is :" + indxNumber + "<br>");

var home = "bangladesh";
var home = home.toUpperCase();

document.write(home + "<br>");

var house = "DHAKA";
var house = house.toLowerCase();
document.write(house + "<br>");

var sentence = "My Name is ";
var name = "Mamun"
document.write(sentence.concat(name) + "<br>");

var text = "Bangladesh";
var text = text.slice(0, 7);
document.write(text);

document.write("<h2>Project Work Output</h2>");

var firstName = prompt("Enter Your First Name:");
var lasttName = prompt("Enter Your last Name:");
var fullName = firstName + lasttName;
var len = fullName.length;
var upper = fullName.toUpperCase();
var cut_ = fullName.slice(0, 2);
document.write("User Full Name is :" + fullName + "<br>");
document.write("Total Length is :" + len + "<br>");

document.write("User Name in Uppercase: " + upper + "<br>");
document.write(cut_);