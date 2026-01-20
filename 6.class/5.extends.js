// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat(){
//         console.log(`eat!!`);
//     }
//     sleep() {
//         console.log(`sleep!!`);
//     }
// }
//
// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//
//     play(){
//         console.log(`play!!`);
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat(){
        console.log(`eat!!`);
    }
    sleep() {
        console.log(`sleep!!`);
    }
}

class Tiger extends Animal {
    //자바 처럼 오버로딩 애노테이션은 없나?
    //자바는 정적 이고 자바스크립트는 동적 이기 때문에
    //자바스크립트에서 오버로딩은 동적 할당이랑 동일하게 동작하는듯?
    eat(){
        console.log(`Tiger eat!!`);
    }
}

class Dog extends Animal {
    constructor(owner,color) {
        // 1. super()는 부모 클래스의 constructor를 호출합니다.
        // 자바스크립트 자식 클래스에 생성자가 있다면, 반드시 this를 쓰기 전에 super()를 호출해야 합니다.
        super(color);
        this.owner = owner;
    }

    play(){
        console.log(`play!`);
    }
    getOwner(){
        console.log(`${this.owner}`);
    }
}

let tiger = new Tiger("yellow");
console.log(tiger);
tiger.eat();
tiger.sleep();

console.log("=================");

let dog = new Dog("엘리",'white');
dog.eat();
dog.sleep();
dog.play();
dog.getOwner();