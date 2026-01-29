// 프로토 타입 을 베이스로 한 객체지향 프로그래밍
// 클래스 로 변경
// function Animal(name, emoji) {
//     this.name = name;
//     this.emoji = emoji;
// }

// 프로토 타입 함수 생성
// Animal.prototype.print = function(name) {
//     console.log(`${this.name} has ${this.emoji}`);
// }
//
// function Dog(name, emoji,owner) {
//     Animal.call(this, name, emoji);
//     this.owner = owner;
// }
//
// Dog.prototype = Object.create(Animal.prototype) // 베이스 프로토 타입
// Dog.prototype.play = ()=>{
//     console.log('같이 놀자옹!')
// }
//
// function Tiger(name, emoji) {
//     Animal.call(this, name, emoji); // 생성자 함수 호출
// }
//
// Tiger.prototype = Object.create(Animal.prototype)// 상속
// Tiger.prototype.hunt = ()=>{
//     console.log('사냥하자')
// }
//
//
// const dog1 = new Dog('dog','🐶','ellie');
//
// dog1.play();
// dog1.print();
//
// let tiger = new Tiger('사자','🐯');
// tiger.print();
// tiger.hunt();
//
// console.log(tiger instanceof Animal); // Animal 객체를 상속 받기 때문에 true
// console.log(tiger instanceof Dog); // Tiger 객체이기 때문에 false
// console.log(tiger instanceof Object); // 최상위 객체이기 때문에 true


class Animal {
    constructor(name,emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    print() {
        console.log(`${this.name} has ${this.emoji}`);
    }
}

class Dog extends Animal {
    constructor(name,emoji,owner) {
        super(name,emoji);
        this.owner = owner;
    }

    play() {
        console.log('같이 놀자옹!')
    }
}

class Tiger extends Animal {
    constructor(name,emoji) {
        super(name,emoji);
    }
    hunt(){
        console.log('사냥하자')
    }
}

const dog1 = new Dog('dog','🐶','ellie');

dog1.play();
dog1.print();

let tiger = new Tiger('사자','🐯');
tiger.print();
tiger.hunt();

console.log(tiger instanceof Animal); // Animal 객체를 상속 받기 때문에 true
console.log(tiger instanceof Dog); // Tiger 객체이기 때문에 false
console.log(tiger instanceof Object); // 최상위 객체이기 때문에 true