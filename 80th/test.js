const taskOne = (callback) =>{
    console.log("Task One");
    callback();
    
}

// anonimus function
const taskTwo = (callback) =>{ 
    setTimeout( () => {
        console.log("Task Two.data Loading");
        callback();
    },2000) 
    
}
const taskThree = (callback) =>{
    console.log("Task Three");
    callback()
}
const taskFour = (callback) =>{
    console.log("Task Four");
    callback();
}
const taskFive = () =>{
    console.log("Task Five");
}
// Traditional Function
// taskOne(function f1(){
//     taskTwo(function f2(){
//         taskThree(function f3(){
//             taskFour(function f4(){
//                 taskFive();
//             });
//         });
//     });
// });
// Arrow Function
taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive()
            })
        })
    })
})
