// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

console.log(`Welcome!`);
const taskFive = () => {
    return new Promise((resolve, reject) => {
        resolve(`Task Five is Completed`);
    });
}
const taskSix = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Task Six is Completed.`)
        }, 2000)
    });
}
const taskSeven = () => {
    return new Promise((resolve, reject) => {
        reject(`Task Seven is not Completed`);
    });
}
const taskEight = () => {
        return new Promise((resolve, reject) => {
            resolve(`Task Eight is Completed`);
        });
    }
    /*
    taskFive()
        .then((rest) => console.log(rest))
        .then(taskSix)
        .then((rest) => console.log(rest))
        .then(taskSeven)
        .then((rest) => console.log(rest))
        .then(taskEight)
        .then((rest) => console.log(rest));
    */
    // async/await how to write
    /*=============================
    async function nameOfFunction() {
        const variableName = await promises((resolve, reject) => {
            resolve();
            reject();
        })
    }
    nameOfFunction();
    ===================================*/


// Traditional Function
// async function callAllPromise1() {
//     const t1 = await taskFive();
//     console.log(t1);
//     const t2 = await taskSix();
//     console.log(t2);
//     const t3 = await taskSeven();
//     console.log(t3);
//     const t4 = await taskEight();
//     console.log(t4);



// }
// callAllPromise1();

// Arrow  Function /And  we can also use try and catch for error handling
const callAllPromise = async() => {
    const t1 = await taskFive();
    console.log(t1);
    const t2 = await taskSix();
    console.log(t2);
    const t3 = await taskSeven();
    console.log(t3);
    const t4 = await taskEight();
    console.log(t4);
}
callAllPromise();


console.log(`bye!`);