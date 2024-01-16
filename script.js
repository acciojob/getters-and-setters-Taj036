//complete this code

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age; 
    }

   
    get getName() {
        return ` ${this.name}`;
    }

    set setAge(age) {
        if (age >= 0) {
            this.age = age;
        } 
    }

    get getAge() {
        return this.age;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying.`);
    }
}

class Teacher extends Person {
    teach() {
        console.log (`${this.name} is teaching.`) ;
    }
}
//  const person1 = new Student("John", 30);
//   person1.study();
 

// const teacher1 = new Teacher("Mr. Smith", 45);
// teacher1.teach();

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
