var link = document.getElementsByTagName("a")[0];
link.innerHTML="Google"; // for changing inner html
link.href = "https://www.google.com"; // for changing hyperlink
// Styling
link.style.textDecoration = "none";
link.style.color = "#fff";
link.style.backgroundColor = "#000";
link.style.padding = "10px 20px";
link.style.borderRadius = "10px";
link.style.textTransform = "uppercase";
link.style.fontSize ="16px";
link.style.fontFamily = 'Anton';

var heading = document.getElementsByClassName("heading1")[0];
heading.style.fontFamily = 'Kalam';
heading.style.fontSize ="75px";
heading.style.textTransform ="uppercase";
heading.style.color ="#FF5151";

// Creating HTML Element

var newheading = document.createElement("h1");
var headingtext = document.createTextNode("New Heading");
newheading.appendChild(headingtext);
// Adding down side
var mydiv = document.getElementById("my_div");
mydiv.appendChild(newheading);
// Craeting a paragraph and add in div
var para = document.createElement("p");
var paraText = document.createTextNode("This is a neew paragraph.");
para.appendChild(paraText);
// add in dowen side
 mydiv.appendChild(para);

//  Removing an Element
var removeheading = document.getElementsByTagName("h2")[4];
removeheading.remove();
document.getElementsByClassName("heading1")[0].remove();
//  Removing an Element from a section

var rempara = document.querySelector(" #my_div p");
mydiv.removeChild(rempara);

// Adding Element in up side of a section

var headingZero = document.createElement("h1"); //create Element
var headingZeroText = document.createTextNode("This is heading top."); // craete text
headingZero.appendChild(headingZeroText); // add the text to element
mydiv.insertBefore(headingZero,document.querySelector("#my_div h2"));

// classList;
// classList.add("Classname");
// classList.remove("Classname");


