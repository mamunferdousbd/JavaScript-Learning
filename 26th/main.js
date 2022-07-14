 /*=============================
 How define Array  Method one
=============================*/
 
 var names = new Array();
 names[0] ="mamun";
 names[1] ="hasan";
 names[2] ="manik";
 names[3] ="rana";
 names[4] ="noor";
 names[5] ="nori";
 document.write(names[4]+'<br>');
 document.write(names[0]+" ");
 document.write(names[3]+" ");
 document.write(names[5]+" ");
 document.write(names);
 document.write(names.length);

 document.write("<h2>End<h2>");
 /*=============================
 How define Array  Method Two
=============================*/
var names = ["hasan","kamal","mamun","harun","manik","rana"];
document.write(names[0]+"<br>");
document.write(names[1]+"<br>");
document.write(names[2]+"<br>");
document.write(names[3]+"<br>");
document.write(names[4]+"<br>");
document.write(names.length);
document.write("<h2>End<h2>");



 /*=============================================
 Push Function to add an element into  Array in the last Index
=============================================*/
document.write("<h2>Push Function<h2>");
var names = ["hasan","kamal","mamun","harun","manik","rana"];
document.write(names+"<br>");
names.push ("Noor");
document.write(names);
document.write("<h2>End</h2>");

/*=============================================
 Pop Function to remove an element into  Array
=============================================*/
document.write("<h2>Pop Function<h2>");
var names = ["hasan","kamal","mamun","harun","manik","rana"];
document.write(names+"<br>");
names.pop ();
document.write(names);
document.write("<h2>End</h2>");

/*=============================================
 Concat Function to add arrar to Array
=============================================*/
document.write("<h2>Concat Function<h2>");
var country1 =["bangladesh","india"];
var country2 =["Nepal","Pakistan"];
var newCountry = country1.concat(country2);
document.write(newCountry+"<br>");
document.write("<h2>End</h2>");