// 1. 원시 타입 (Primitive Type) - Copy by Value
let a = 1;
let b = a; // 값 '1'이 새로운 메모리 공간에 복사됨
b = 2;     // b의 공간만 2로 변경됨

console.log(`a: ${a}, b: ${b}`); // a: 1, b: 2 (서로 영향을 주지 않음)

// 2. 객체 타입 (Object Type) - Copy by Reference
const apple = {
    name: '사과'
};

// apple이 가진 '주소값'이 orange에 복사됨
const orange = apple;

orange.name = '오렌지';

console.log(apple.name);  // '오렌지' (원본도 변경됨)
console.log(orange.name); // '오렌지'

// 3. 참조 비교
console.log(apple === orange); // true (같은 주소를 가리킴)

// 4. [추가 학습] 만약 내용물만 같고 주소가 다르다면?
const pear1 = { name: '배' };
const pear2 = { name: '배' };

console.log(pear1 === pear2); // false! (내용은 같지만 메모리 주소가 다름)