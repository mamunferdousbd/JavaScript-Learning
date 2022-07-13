// 1+2+3+4+5=?




var sum = 0;
for(var x = 1; x <=5 ; x = x+1){
    sum = sum + x;
}
document.write(sum);
document.write("<h2>End </h2>");

var m = parseFloat(prompt("Enter The First Number"));
var n = parseFloat(prompt("Enter The Last Number"));
var sum = 0;
for( var x = m ; x <= n; x=x+1){
    sum =sum +x;
}
document.write(sum);
