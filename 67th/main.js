function addNumbers(x,y,z){
return  x+y+z;
}
let numbers =[1,2,3];
// var sum = addNumbers(numbers[0],numbers[1],numbers[2]);
// console.log(addNumbers(...numbers)); //sprade function
// console.log(sum);

let numbers1 = [5,6,...numbers];
let numbers2 = [5,...numbers,6];
let numbers3 = [...numbers,5,6];
console.log(numbers1);
console.log(numbers2);
console.log(numbers3);
// Array Concatination

let number4 =[1,2,3,4];
let number5 =[5,6,7,8];
let number6 = number4.concat(number5); // General rule
let number7 = [...number4,...number5]; // using sprade 
console.log(number6);
console.log(number7);

// Object Concatination

let info1 = {
    name:"Abdullah Al Mamun",
    age: 36,
};
let info2 = {
    language: "English",
    occupation: "Job",
};
let info = {...info1,...info2};
console.log(info);
