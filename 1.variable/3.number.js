// 1. 기본 숫자 리터럴
const integer = 123;    // 정수
const negative = -123;  // 음수
const double = 1.23;    // 실수 (부동소수점)

console.log(integer, negative, double);

// 2. 진법 표현 (ES6+)
const binary = 0b1111011; // 2진수 (Binary)
const octal = 0o173;      // 8진수 (Octal)
const hex = 0x7b;         // 16진수 (Hexadecimal)

console.log(binary, octal, hex); // 모두 10진수 123으로 출력됨

// 3. 특수 숫자 값
console.log(0 / 123);      // 0
console.log(123 / 0);      // Infinity (양의 무한대)
console.log(123 / -0);     // -Infinity (음의 무한대)
console.log(123 / 'text'); // NaN (Not a Number: 숫자가 아님을 나타내는 숫자값)

// 추가: 타입 확인
console.log(typeof integer); // "number"
console.log(typeof double);  // "number"