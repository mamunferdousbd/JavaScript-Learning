// Working with Certain Condition
//The find() method returns the value of the first array element that passes a test function.
const numbers= [10,20,30,40,50,60];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[05]);

const first = numbers.find(Myfunction);

function Myfunction(value,index,array){
return value> 30;

}
console.log(first);
console.log("end");

// Another Example
const number = [1,15,11,13,17,19,22,25];

// Traditional Function
const EvenNumber= number.find(Myfun);
function Myfun(value,index,array){
    if(value%2===0){
        return value;
    }
}
// Index number
const EvenNumberInd= number.findIndex(Myfun);
function Myfun(value,index,array){
    if(value%2===0){
        return value;
    }
}
console.log(EvenNumber);
console.log(EvenNumberInd);
console.log("End");
// Arrow function
const evenNumber = number.find(x  => x%2===0 )
const evenNumberIndex = number.findIndex(x  => x%2===0 )
console.log(evenNumber);
console.log(evenNumberIndex);
console.log("end");
//The findIndex() method returns the index of the first array element that passes a test function.

// Using with Object array

const student =[
        {
            id:999,
            Name:"Abdullah",
            age:22,
            cgpa: 4.25,
        },
        {
            id:1000,
            Name:"Abdullah Al",
            age:32,
            cgpa: 4.50,
        },
        {
            id:1001,
            Name:" Al Mamun",
            age:36,
            cgpa: 4.57,
        },
        {
            id:1002,
            Name:"Abdullah  Mamun",
            age:28,
            cgpa: 4.59,
        },
        {
            id:1003,
            Name:"Abdullah Al Hasan",
            age:29,
            cgpa: 4.50,
        },
        {
            id:1005,
            Name:"Abdullah Al Masum",
            age:32,
            cgpa: 4.85,
        },

]
const cgpaN = student.find( x => x.cgpa > 4.5 );
const cgpaNInex = student.findIndex( x => x.cgpa > 4.5 );
console.log(cgpaN);
console.log(cgpaNInex);
        
    

