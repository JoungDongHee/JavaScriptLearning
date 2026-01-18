// 1. let: 재할당이 가능한 변수
let mutableValue = 1;
mutableValue = 2; // OK

// 2. const: 재할당이 불가능한 바인딩
const immutableBinding = 'Hello';
// immutableBinding = 'Hi'; // TypeError: Assignment to constant variable.

// 3. 하드 상수 (Hard Constant)
// 프로그램 전반에서 공유되는 설정값이나 물리적 상수에 사용
const MAX_VALUE = 10;
const COLOR_RED = '#F00';

// 4. 상수 변수 (Object/Array with const)
const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
};

// apple = {}; // 에러: 주소값 자체를 바꾸는 재할당은 금지됨
apple.name = 'orange'; // OK: 주소가 가리키는 Heap 내부의 데이터 수정은 허용됨

console.log(apple.name); // 'orange'

// [추가] 만약 내부 값도 못 바꾸게 하고 싶다면?
const frozenApple = Object.freeze({
    name: 'apple',
    display: '🍎'
});
// frozenApple.name = 'orange'; // 무시됨 (엄격 모드에서는 에러)