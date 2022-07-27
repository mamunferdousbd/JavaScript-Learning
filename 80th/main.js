

// How to create promise pending -- resolve--- reject

// const promise1 = new Promise((resolve,reject)=>{
//     let completedPromise = false;
//     if(completedPromise){
//         resolve(`Successful`);
//     }else{
//         reject(`Not success`);
//     }

// });
// promise1.then((res)=>{
//     console.log(res);
    
// })
// .catch((res)=>{
//     console.log(res);
// });
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Promise 2 Successful`);
    },2000);
});

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Promise 3 Successful`);
    },1000);
});

// promise2.then((res)=>{
// console.log(res);
// });
// promise3.then((res)=>{
//     console.log(res);
// });
Promise.race([promise2,promise3]).then((res)=>{
    console.log(res);
})



