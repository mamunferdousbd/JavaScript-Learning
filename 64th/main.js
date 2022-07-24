// JavaScript let
// The let keyword allows you to declare a variable with block scope.

// let variable
let  x =10;
if(true){
    let x  =20;
    console.log(x); // output will be 20
}
console.log(x);//output will be 10.

// Var variable 
var  y =10;
console.log(x);
if(true){
    var y  = 20;
    console.log(y);// output will be 20.
}
console.log(y); // output will be 20.

/*+++++++++++++++++++++++++++
Cannot be Redeclared
+++++++++++++++++++++++++++++*/

// let  p ="Abdullah al Mamun";
// let  p = 10; // SyntaxError: 'p' has already been declared.

// Var keyword Can Be Redeclared
var name = "Abdullah Al Mamun";
var name = 20; // No error will happened.

// Variables declared inside a { } block can be accessed from outside the block.
/*
{
    var num1 = 10;
    
}

console.log(num1);
*/

// Variables declared inside a { } block can not be accessed from outside the block.
/*
{
    let num2 = 10;
}
console.log(num2);
*/
/*==============================
 Const Keyword
==============================*/
// The const keyword allows you to declare a variable with block scope.
var value ;
value =10;
let value1 ;
value1 = 20;
// for var and let no problem for declearing variable and then assign value
const numVer =10 ;
// for const keyword for declearing variable and then assign value is not possible (need to declear varName and VarValue at a time)
// Rest of All are same like let

/*==================
Constant Arrays
==================*/   
//You can change the elements of a constant array:

const cars =["Saab","BMW","Tata"];
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
cars[0]= "Mercedes";
console.log(cars);
cars.push("Audi");
console.log(cars);
// const cars= ["hati"]; can not declear an array same name with const keyword.

/*==================
Constant Object
==================*/   
//You can change the properties of a constant object:

// Create an object:
const mamunProfile = {
    Name: "Abdullah Al Mamun",
    Age: 35,


};

console.log(mamunProfile);
// Change Element
mamunProfile.Name ="Hasan";
console.log(mamunProfile);
// Add Element
mamunProfile.GPA = 4.80;
console.log(mamunProfile);
// But you can NOT reassign the object:
//const car = {type:"Fiat", model:"500", color:"white"};

//car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

/*=====================================================
 * ES6 template literals vs. concatenated strings
 =====================================================*/

 let firstName = "Abdullah Al ";
 let lastName = " Mamun";
 let fullName = firstName + lastName;
 console.log("My Name Is "+ fullName+".");// 
 console.log(`My Name is ${fullName}.`); // ES6
/*=============================
  function General
=============================*/
function add(x,y){
    var sum = x+y;
    console.log(sum);
}
add(20,30);
/*=============================
  function anonimus
=============================*/
var add = function (x,y){
    var x=10;
    var y =5;
    var sum = x+y;
    console.log(sum);
    
}
add();
/*=============================
  function In ES6(Arrow Function)
=============================*/
// const FunctionName = (perameter) =>{};
const addSum = (x,y) => {
    const sum = x+y;
    console.log(sum);
}
addSum(10,7);


