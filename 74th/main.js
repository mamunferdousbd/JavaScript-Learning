// Array destructering
// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y); // 1
// console.log(z); // 2

// let numbers =[10,20,30,40,50,60];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);

// let [num1,num2,num3,num4,num5,num6]= numbers;
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);
// Sprade function
// let [num1,num2,...z]= numbers;
// console.log(z);
// console.log("end");

// Swap Variables

// let a = 10, b= 20;
// console.log(a);
// console.log(b);
// swap 
// [a,b]=[b,a]
// console.log(a);
// console.log(b);

// object destructuring

// const   students = {
    
//         id : 103,
//         fname : "Abdullah Al Mamun",
//         age:35,
//         language: {
//             native: "Bengali",
//             speaking: "English"
//         }
// }
// const {id,fname,age,language} = students;
// console.log(students.id);
// console.log(students.name);
// console.log(students.age);
// console.log(id);
// console.log(fname);
// console.log(age);
// console.log(language);
// console.log(language.native);
// console.log(language.speaking);

// destructuring function parameters

//  const studentsInfo = (student) => {
//     console.log(`${student.id}, ${student.name},${student.cgpa}`);

//  }
 const studentsInfo = ({id,name,cgpa}) => {
    console.log(`${id}, ${name},${cgpa}`);

 }

 const student ={
    id:104,
    name:"Abdullah Al Mamun",
    cgpa:3.98
 }
 studentsInfo(student);

