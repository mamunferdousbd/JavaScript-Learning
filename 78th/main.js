/*Synchronous  */

// console.log("Task1");
// console.log("Task2");
// console.log("Task3");
// console.log("Task4");
// console.log("Task5");

// function taskOne(){
//     console.log("Task One");
// };

// // Asynchronous
// function dataloading(){
//     console.log("Task Two.data loading");
// }
// function taskTwo(){
//     setTimeout(dataloading,2000);
// };
// function taskThree(){
//     console.log("Task Three");
// };
// function taskFour(){
//     console.log("Task Four");
// };
// function taskFive(){
//     console.log("Task Five");
// };

// // Output 
// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();


const taskOne = () =>{
    console.log("Task One");
}

const dataLoading = ()=>{
    console.log("Task Two.data Loading");
}
const taskTwo = () =>{
    setTimeout(dataLoading,2000);
}
const taskThree = () =>{
    console.log("Task Three");
}
const taskFour = () =>{
    console.log("Task Four");
}
const taskFive = () =>{
    console.log("Task Five");
}
taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();