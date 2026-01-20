// 생성자 함수 (Constructor Function)
// 관례적으로 대문자로 시작하며, 객체를 생성하기 위한 템플릿입니다.
function Fruit(name, emoji) {
    // 1. 암묵적으로 새로운 빈 객체 {}가 생성되고 this에 바인딩됩니다.
    this.name = name;
    this.emoji = emoji;

    // 2. 메서드를 정의 (주의: 이 방식은 인스턴스마다 함수가 복제되어 생성됩니다.)
    this.display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    };

    // 3. 암묵적으로 this(생성된 객체)가 반환됩니다.
}

// 'new' 키워드를 사용하여 인스턴스 생성
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);

apple.display();  // apple : 🍎
orange.display(); // orange : 🍊

