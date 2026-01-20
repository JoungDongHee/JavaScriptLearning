class Fruit {
    static MAX_VALUE = 100;
    #name;
    #emoji;
    constructor(name, emoji) { // static 이 없으면 인스턴스 레벨 즉 인스턴스 마다 새로 생성됨
        this.name = name;
        this.emoji = emoji;
    }

    display=()=>{  // static 이 없으면 인스턴스 레벨 즉 인스턴스 마다 새로 생성됨
        console.log(`${this.name} : ${this.emoji}`);
    }

    // 클래스 레벨 에서 관리됨 인스턴스 에는 포함되지 않음
    // 만들어진 인스턴스 를 참조할 필요가 없는 함수
    // static 은 this 를 사용할수 없음 인스턴스 자체가 없기 때문
    // 자바의 Util 클래스 처럼 사용할수 있을듯?
    static makeRandomFruit() {
        return new Fruit('banana', '🍌');
    }
}

const apple = new Fruit('apple', '🍎');
console.log(apple); // 스테틱 함수 없음
apple.display(); // apple : 🍎

const orange = new Fruit('orange', '🍊');
console.log(orange); // 스테틱 함수 없음
orange.display(); // orange : 🍊

const banana = Fruit.makeRandomFruit();
let maxvalue = Fruit.MAX_VALUE;
console.log(banana);
console.log(maxvalue);

