// 1. 변수 축약 (Property Shorthand)
const x = 2;
const y = 3;

// ES6 이전
const oldWay = { x: x, y: y };

// ES6 이후 (축약형)
const newWay = { x, y };

// 2. 메서드 축약 (Method Shorthand)
// 객체 내부의 함수를 정의할 때 'function' 키워드와 ':'를 생략할 수 있습니다.
const calculator = {
    x,
    y,
    add() { // add: function() { ... } 의 축약형
        return this.x + this.y;
    },
    multiply() {
        return this.x * this.y;
    }
};

console.log(calculator.add()); // 5

// 3. 팩토리 함수에서의 활용
function createUser(name, age, email) {
    return {
        name,
        age,
        email,
        createdAt: new Date(), // 축약하지 않는 속성과 섞어서 사용 가능
    };
}

const user = createUser('John', 30, 'john@example.com');
console.log(user);