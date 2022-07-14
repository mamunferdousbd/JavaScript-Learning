// Break
document.write("<h2>Break:When the condition will fulfill the loop will break and will not proceed</h2>");

for(var i = 0; i <= 10; i++){
    if(i == 5){
        break;
    }
    document.write(" The Number is :  "+ i +"<br>");
}

document.write("<h2>End</h2>");
// Continue
document.write("<h2>Continue:When the condition will fulfill the loop will break only for the condition  and will jump to next loop</h2>");

for(var i = 0; i <= 10; i++){
    if(i == 5){
        continue;
    }
    document.write(" The Number is :  "+ i +"<br>");
}

document.write("<h2>End</h2>");

// Write a program 
for(var i = 1; i <= 100; i++){
    if(i%2 != 0  ){
        continue;
    }
    document.write(" The Number is :  "+ i +"<br>");
}

document.write("<h2>End</h2>");