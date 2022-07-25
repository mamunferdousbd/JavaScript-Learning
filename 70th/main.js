
//  Normal For loop for array
var number = [10,20,30,40,50];
for(var i = 0; i < number.length; i++){
    // console.log(i);
    // console.log(number[i]);
}
console.log("<h2>End</h2>");
// For each loop 
var num = [10,30,50,60,70,90,100,110];
num.forEach(value => {
    console.log(value);
});
console.log("<h2>End</h2>");
// details

const numberArray = [10,2,1,3,4,56,45,78,80];
numberArray.forEach(Myfunction);
function Myfunction(x){
    console.log(x);
}
console.log("<h2>End</h2>");
// or
const NumArray = [10,12,30,50];
NumArray.forEach(function(x){
    console.log(x);

});
console.log("<h2>End</h2>");

// square of an array elements 

var number = [10,20,30,40,50,60];
var square =[];
number.forEach(x=>{
    square.push (x*x);
    
   
});
console.log(number);
console.log(square);
console.log("<h2>End</h2>");
var number = [10,20,30,40,50,60];
console.log(number);
number.forEach(function(x,index,arr){
    arr[index] = x+5;
})
console.log(number);

