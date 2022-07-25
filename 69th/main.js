// for of

const cars = ["BMW", "Volvo", "Mini"];
for(let car of cars){
    console.log(car);
}

// for in is important when we iterate object

const students ={
    name:"Abdullah Al Mamun",
    id: 10120,
    cgpa: 4.98,
}
for(let x in students){
    // console.log(x); //key
    // console.log(students[x]); //value
    console.log(`${x}: ${students[x]}`); // Key and Value together
}