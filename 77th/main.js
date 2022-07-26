import { text, setText } from './module.js';

console.log(text);
setText("How are you?");
console.log(text);
// Class 

class Student {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let s1 = new Student(101, "Abdullah");
console.log(s1);

// Another Example

class Members {
    constructor(id, name, age, nationality) {
            this.id = id;
            this.name = name;
            this.age = age;
            this.nationality = nationality
        }
        // set
    set studentName(name) {
            this.name = name;
        }
        // get 

    get memberInfo() {
        return this.id + " " + this.name;
    }
}

let member1 = new Members(103, "Manik", 36, "Bangladesh");
console.log(member1);
// set
member1.studentName = "Hasan";
console.log(member1.name)

console.log(member1.memberInfo);