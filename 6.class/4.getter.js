//접근자 프로퍼티
class Student {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullName(){
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(value) {
        console.log(value);
    }
}

let student = new Student('김','이나');
student.fullName = '김철수'; // setter 호출

