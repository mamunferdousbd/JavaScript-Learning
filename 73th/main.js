// aim Show the student Name whose gpa is grater than 4.50

const students = [{
        id: 101,
        Name: "Abdullah",
        cgpa: 5.00,
    },
    {
        id: 102,
        Name: "Hasan",
        cgpa: 4.50,
    },
    {
        id: 103,
        Name: "Mamun",
        cgpa: 4.20,
    },
    {
        id: 104,
        Name: "Suman",
        cgpa: 4.75,
    }
];
// traditional Function Using
function studentName1() {
    return students.filter(function(x) {
        return x.cgpa > 4.5;
    }).map(function(y) {
        return y.Name
    });

};
console.log(studentName1());
console.log("End");
console.log("By using Arrow Function");

// Arrow Function
const studenName2 = () => {
        return students.filter((x) => x.cgpa > 4.5).map((x) => x.Name);
    }
    // Simplified more
    // const studenName2 = () => students.filter((x) => x.cgpa > 4.5).map((x) => x.Name);


console.log(studenName2());