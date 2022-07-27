// callback and higher order function

// function square(x){
//     console.log(`Square of ${x} = ${x*x}`)
// }

// // const y =square;
// // y(5);

// function higherOrderFunction(num,callback){
//     callback(num);
// }
// higherOrderFunction(6,square);


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

