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

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
