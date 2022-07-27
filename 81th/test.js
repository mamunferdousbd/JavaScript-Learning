// console.log(`hi`);

// const taskOne =()=>{
//      return new Promise((resolve,reject)=>{
//         resolve(`Task One is Completed`);
//      });
// }
// const taskTwo =()=>{
//      return new Promise((resolve,reject)=>{
//         resolve(`Task Two is Completed`);
//      });
// }
// const taskThree =()=>{
//      return new Promise((resolve,reject)=>{
//         resolve(`Task Three is Completed`);
//      });
// }
// const taskFour =()=>{
//      return new Promise((resolve,reject)=>{
//         resolve(`Task Four is Completed`);
//      });
// }
// taskOne()
// .then((res)=>console.log(res))
// .then(taskTwo)
// .then((res)=> console.log(res))
// .then(taskThree)
// .then((res)=>console.log(res))
// .then(taskFour)
// .then((res)=> console.log(res));
console.log(`by`);

// setTimeout

const taskFive =()=>{
    return new Promise((resolve,reject)=>{
       resolve(`Task Five is Completed`);
    });
}
const taskSix =()=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve(`Task Six is Completed.`)
       },2000)
    });
}
const taskSeven =()=>{
    return new Promise((resolve,reject)=>{
       resolve(`Task Seven is Completed`);
    });
}
const taskEight =()=>{
    return new Promise((resolve,reject)=>{
       resolve(`Task Eight is Completed`);
    });
}
taskFive()
.then((rest)=>console.log(rest))
.then(taskSix)
.then((rest)=> console.log(rest))
.then(taskSeven)
.then((rest)=>console.log(rest))
.then(taskEight)
.then((rest)=> console.log(rest));
