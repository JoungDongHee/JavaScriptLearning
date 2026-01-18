// 1. 기본 산술 연산자
console.log(5 + 2);  // 7
console.log(5 - 2);  // 3
console.log(5 * 2);  // 10
console.log(5 / 2);  // 2.5 (Java와 달리 정수 나눗셈이 아님)
console.log(5 % 2);  // 1 (나머지 연산자)
console.log(5 ** 2); // 25 (ES7 도입, Math.pow(5, 2)와 동일)

// 2. + 연산자의 오버로딩 (Overloading)
// 피연산자 중 하나라도 문자열이면 '문자열 연결'이 우선됩니다.
let text = '두개의 ' + '문자를';
console.log(text); // '두개의 문자를'
console.log(2 + "2"); // "22" (숫자가 문자열로 변환됨)

// 3. 다른 연산자의 형 변환 (주의!)
// -, *, / 연산자는 문자열을 '숫자'로 변환하려고 시도합니다.
console.log(10 - "5");    // 5 (숫자)
console.log("10" * "2");  // 20 (숫자)
console.log("10" / "삼"); // NaN (숫자로 변환할 수 없는 문자열)

// 4. 단항 산술 연산자 (Unary Operators)
let x = 5;
x++; // 6
x--; // 5
console.log(+true);  // 1 (불리언을 숫자로 강제 변환)
console.log(+"");    // 0 (빈 문자열을 숫자로 강제 변환)