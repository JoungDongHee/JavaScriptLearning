class Fruit {
    // 1. 멤버 변수 (Field) - 필수는 아니지만 가독성을 위해 상단에 선언하기도 함
    // #을 붙이면 Java의 private 키워드처럼 동작합니다.
    #name;
    #emoji;

    // 2. 생성자 (Constructor)
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }

    // 3. 인스턴스 메서드 (Prototype Method)
    // 모든 인스턴스가 공유하므로 메모리 효율이 좋습니다.
    display() {
        console.log(`${this.name} : ${this.emoji}`);
    }

    display2 = ()=>{
        console.log(`${this.name} : ${this.emoji}`);
    }

    // 4. 정적 메서드 (Static Method) - 인스턴스 없이 클래스 레벨에서 호출 (Java의 static과 동일)
    static makeRandomFruit() {
        return new Fruit('banana', '🍌');
    }
}

const apple = new Fruit('apple', '🍎');
apple.display(); // apple : 🍎

const orange = new Fruit('orange', '🍊');
orange.display(); // apple : 🍎


// 정적 메서드 호출
const random = Fruit.makeRandomFruit();
random.display(); // banana : 🍌


console.log(apple === orange); // false 새로운 인스턴스로 참조하는 메모리가 다르기 때문에
console.log(apple.display === orange.display); // true display() 함수는 힙 영역에서 서로 공유하는 형태로 존재함
console.log(apple.display2 === orange.display2); // false 화살표 함수는 각 인스턴스 마다 새롭게 할당 받기 때문에 false