// 1. 단항 부정 연산자 (-) : 부호를 반전시킴
let a = 5;
a = -a; // -1 * 5 = -5
console.log(a);    // -5
console.log(-a);   // -1 * -5 = 5 (출력 시에만 반전)

// 2. 단항 플러스 연산자 (+) : 부호를 바꾸지 않고 숫자로 변환만 시도함
a = -5;
a = +a;            // 부호 변화 없음! 여전히 -5
console.log(a);    // -5

// 3. 논리 부정 연산자 (!)와 이중 부정 (!!)
let isActive = true;
console.log(!isActive);  // false (반전)
console.log(!!isActive); // true (불리언 타입으로 강제 확정)

// 4. 숫자가 아닌 타입의 숫자 변환 (단항 플러스 활용)
console.log(+false);     // 0
console.log(+null);      // 0
console.log(+undefined); // NaN (정의되지 않은 값은 숫자가 될 수 없음)
console.log(+'');        // 0 (빈 문자열은 0으로 취급)
console.log(+true);      // 1
console.log(+'123');     // 123 (숫자로 구성된 문자열은 숫자가 됨)
console.log(typeof b);
console.log(+'text');    // NaN

// 5. Truthy 확인
console.log(!!1);        // true

// 1. 단항 플러스(+) 연산자의 타입 변환 확인
let strNumber = '123';
let convertedNumber = +strNumber;

console.log(typeof strNumber);      // "string"
console.log(typeof convertedNumber); // "number"
console.log(convertedNumber);       // 123

// 2. NaN (Not a Number)의 특이성
let invalidConversion = +'text';
console.log(invalidConversion);      // NaN
console.log(typeof invalidConversion); // "number" (중요: NaN도 타입은 숫자입니다!)
