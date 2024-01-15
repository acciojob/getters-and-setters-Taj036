//complete this code
class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age; 
    }

    // Getter for name
    get getName() {
        return `My name is ${this.name}`;
    }

    // Setter for age
    set setAge(age) {
        if (age >= 0) {
            this._age = age;
        } else {
            console.error("Age cannot be negative.");
        }
    }

    // Getter for age
    get getAge() {
        return this._age;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying.`);
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching.`);
    }
}
const person1 = new Person("John", 30);
console.log(person1.getName); // Output: My name is John
console.log(person1.getAge);  // Output: 30

const student1 = new Student("Alice", 20);
student1.study(); // Output: Alice is studying.
console.log(student1.getName); // Output: My name is Alice
console.log(student1.getAge);  // Output: 20

const teacher1 = new Teacher("Mr. Smith", 45);
teacher1.teach(); // Output: Mr. Smith is teaching.
console.log(teacher1.getName); // Output: My name is Mr. Smith
console.log(teacher1.getAge); 

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
