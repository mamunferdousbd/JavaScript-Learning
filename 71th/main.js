// Square of Array with forEach loop

var number = [1,2,3,4,5,6];
var squareNumber =[];
number.forEach(function(x){
    squareNumber.push(x*x);
})
console.log(squareNumber);
console.log("End");

// Square of Array with map function
var number = [1,2,3,4,5,6];
var squareNumber = number.map(function(x){
    return (x*x); 
}); // no need declear empty Array because map will create a new Array.
console.log(squareNumber);
console.log("End");

// Filter
var number = [1,2,3,4,5,6];
var newNumber = number.filter(function(x){
    return x>3;
});
console.log(newNumber);

