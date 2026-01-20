const apple = {
    name: 'apple',
    // 1. 메서드 축약형 (ES6+ 권장)
    // 'display: function() {}' 과 동일하게 동작하지만 더 간결합니다.
    display() {
        console.log(`${this.name} : 🍎`);
    },
    // 2. 화살표 함수 메서드 (주의!)
    // 화살표 함수는 자신만의 this를 가지지 않고, 외부 스코프의 this를 가져옵니다.
    displayArrow: () => {
        console.log(`${this.name} : 🏹`);
    }
};

apple.display();      // 'apple : 🍎' (정상 동작)
apple.displayArrow(); // 'undefined : 🏹' (전역 객체의 name을 찾으려 함)