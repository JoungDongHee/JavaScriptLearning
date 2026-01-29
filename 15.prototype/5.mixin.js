// 오브젝트는 단 하나의 prototype 을 가르킬수 있음
// 하지만 여러개의 함수들을 상속하고 싶다.
// Mixin

const play = {
    play : function (){
        console.log(`${this.name} 놀아요!`)
    }
}

const sleep = {
    sleep : function (){
        console.log(`${this.name} 자요`)
    }
}

function Dog(name){
    this.name = name;
}

Object.assign(Dog.prototype,play,sleep);

let dog = new Dog('멍멍');
console.log(dog);
dog.play();
dog.sleep();

class Animal {

}

class Tiger extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
}

Object.assign(Tiger.prototype,play,sleep);
let tiger = new Tiger('호랑이');
console.log(tiger);
tiger.play();
tiger.sleep();