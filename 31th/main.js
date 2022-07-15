// for student information

var name = "Abdullah Al Mamun";
var id = "EEE103";
var cgpa = 3.49;
var age = 35;
var lan = ["English", "Bengali", "Hindi", "Urdu", "Arabic"];

// How to create an Object
//How to print the value of an object

var student1 = {
    name: "Abdullah Al Mamun",
    id: "EEE103",
    age: 35,
    cgpa: 3.48,
    lan: ["English", "Bengali", "Hindi", "Urdu", "Arabic"]
}


// Adding a constractor
// function 
// Capital Letter use kore name dite hobe

function Student(name, id, age, cgpa, lan) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.cgpa = cgpa;
    this.lan = lan;
    // Output By using function
    this.output = function() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lan);
    }
}
var student0 = new Student("Abdullah", "EEE103", 35, 3.48, ["English", "Bengali", "Hindi", "Urdu", "Arabic"]);
var student1 = new Student(" Mamun", "EEE104", 25, 3.99, ["English", "Hindi", "Urdu", "Arabic"]);
var student2 = new Student("Al Mamun", "EEE105", 37, 3.8, ["English", "Bengali", "Urdu", "Arabic"]);
var student3 = new Student("Abdullah Al", "EEE107", 32, 3.4, ["English", "Bengali", "Hindi", "Arabic"]);
var student4 = new Student("Abdullah Mamun", "EEE1010", 30, 3.5, ["Bengali", "Hindi", "Urdu", "Arabic"]);
// Output by Calling Function
student0.output();
student1.output();
student2.output();
student3.output();
student4.output();

// Output Ordinary
// console.log(student0.name);
// console.log(student0.id);
// console.log(student0.age);
// console.log(student0.cgpa);
// console.log(student0.lan);

// console.log(student1.name);
// console.log(student1.id);
// console.log(student1.age);
// console.log(student1.cgpa);
// console.log(student1.lan);

// console.log(student2.name);
// console.log(student2.id);
// console.log(student2.age);
// console.log(student2.cgpa);
// console.log(student2.lan);

// console.log(student3.name);
// console.log(student3.id);
// console.log(student3.age);
// console.log(student3.cgpa);
// console.log(student3.lan);

// console.log(student4.name);
// console.log(student4.id);
// console.log(student4.age);
// console.log(student4.cgpa);
// console.log(student4.lan);